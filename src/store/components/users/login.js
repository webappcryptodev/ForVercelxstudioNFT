/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

import { createSelector } from "reselect";

import { apiCallInit } from "../../actions";

// import {
//   actionSuccessMessage,
//   updateAttempt,
//   updateFailed,
//   updateSuccess,
//   postValidation,
//   updateSuccessPlain,
// } from '../layouts/display';

import CONSTANTS from "../../constants";

// import { alert, TYPE } from '../../../components/alert';

const {
  REQUEST_METHODS,
  ROUTES: { USERS },
} = CONSTANTS;

// CREATING A SLICE

// creating and handling dispatched actions using corresponding reducers
const slice = createSlice({
  name: "login",
  initialState: {
    account: null,

    password: "anything",

    profile: null,

    refresh: true,
  },
  reducers: {
    // General Succesful Api Call Handler
    setLogin: (state, action) => {
      state.profile = action.payload;

      state.password = action.payload.password;

      state.account = action.payload.account;

      state.user = action.payload;
    },

    setRefresh: (state) => {
      state.refresh = !state.refresh;
    },
  },
});

// -------------------------------------*****----------------------------------------

// ACTIONS

// extracting actions from slice
export const { setLogin, setRefresh } = slice.actions;

// -------------------------------------*****----------------------------------------
// ACTION CREATORS
export const appRefresh = () => (dispatch) => dispatch(setRefresh());

// utility variables

// Users LOGIN
export const userLogin = (data) => async (dispatch) => dispatch(setLogin(data));

export const userLoginn = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.LOGIN,

      method: REQUEST_METHODS.POST,

      credentials: true,

      // onStart: updateAttempt.type,

      onSuccess: setLogin.type,

      // onError: updateFailed.type,
    })
  );
// Users SIGN_UP

// -------------------------------------*****----------------------------------------
// SELECTORS

// selecting the app  state

const auth = (state) => state.users.login;

// selecting the state

export const userProfile = createSelector([auth], (user) => user?.profile);

export const selectRefreshState = createSelector(
  [auth],
  (user) => user?.refresh
);

export default slice.reducer;
