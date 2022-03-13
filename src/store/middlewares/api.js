/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import axios from "axios";
import history from "../../utils/history";

import * as Actions from "../actions";

import { actionFailedMaster } from "../components/layouts/display";

import CONSTANTS from "../constants";
import { useNavigate } from 'react-router-dom';
// import history from '../../utils/history';

const {
  SERVER_TOKEN,
  ROUTES: { BASE_URL },
} = CONSTANTS;

// middleware for handling api calls

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    // ignore if action is not an api call

    const source = axios.CancelToken.source();
    // console.log(action, 'action');
    if (action.type !== Actions.apiCallInit.type) return next(action);

    // extract action keys from action object

    const {
      url,
      contentType,
      method,
      data,
      onStart,
      onSuccess,
      onError,
      credentials,
      successRoute,
      errorRoute,
      refresh,
      successAction,
      backend,
    } = action.payload;

    // notify UI and other components of api call start

    // if (onStart) dispatch({ type: onStart });
    if (onStart) {
      if (Array.isArray(onStart)) {
        for (let actionIndex = 0; actionIndex < onStart.length; actionIndex++) {
          dispatch({ type: onStart[actionIndex] });
          if (actionIndex !== onStart.length - 1) {
            next(action);
          }
        }
      } else {
        dispatch({ type: onStart });
      }
    }

    // pass action to loggers and execution pipeline

    next(action);

    // set axios to sccomodate credentia;s by default

    axios.defaults.credentials = true;

    // Gets Authorization Token From LocalStorage
    const auth_token = `Bearer ${localStorage.getItem("auth-token")}`;
    // make api call

    if (backend) data.password = SERVER_TOKEN;

    try {
      const response = await axios.request({
        baseURL: BASE_URL,
        withCredentials: credentials,
        cancelToken: source.token,
        headers: {
          "Content-Type": contentType || "application/json",
          "Access-Control-Allow-Origin": true,
          "Authorization": auth_token,
        },  
        
        timeout: 60000,
        url,
        method,
        data,
      });

      if (backend)
        localStorage.setItem("auth-token", response.headers.authorization);

      // General Success Action - Can Be Picked Up By Any Reducer
      dispatch(Actions.apiCallSuccess(response.data));
      // specific success Acion - Usually picked Up By the Reducer Of The Corrensponding Action

      if (onSuccess) {
        if (Array.isArray(onSuccess)) {
          for (action of onSuccess) {
            dispatch({ type: action, payload: response.data });
          }
        } else {
          dispatch({ type: onSuccess, payload: response.data });
        }
      }

      if (successRoute) {
        setTimeout(() => {
          refresh
            ? (window.location = successRoute)
            : history(successRoute);
        }, 1000);
      }

      if (successAction) {
        const routeAction = successAction();

        history(routeAction);
      }

      return () => {
        source.cancel("Component got unmounted");
      };
    } catch (error) {
      // building error message from network status

      const buildError =
        !window.navigator.onLine || !error.response
          ? error.message
          : error.response.data.message;

      // console.log(error.response.data.message);

      // General Success Action - Can Be Picked Up By Any Reducer
      dispatch(Actions.apiCallFailed(buildError));

      // specific Error Acion - Usually picked Up By the Reducer Of The Corrensponding Action

      // if (onError) dispatch({ type: onError, payload: buildError });

      if (onError) {
        if (Array.isArray(onError)) {
          for (action of onError) {
            dispatch({ type: action, payload: buildError });
          }
        } else {
          dispatch({ type: onError, payload: buildError });
        }
      }

      if (errorRoute) {
        const history = useNavigate();
        refresh ? (window.location = errorRoute) : history(errorRoute);
      }

      dispatch({ type: actionFailedMaster.type });

      // setTimeout(() => { window.location = successRoute; }, 1500);
    }
  };

export default api;
