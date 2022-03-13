/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

import { createSelector } from "reselect";

import { apiCallInit } from "../../actions";

import {
  loadStart, 
  loadFinish, 
  loadSuccess,
  loadFailed,
  profileStart,
  profileSuccess,
  profileFailed
  // ,
  // profileFinish
} from '../overlay/overlay';

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
  name: "auth",
  initialState: {
    account: null,

    user: null,

    profile: null,
    profiles: [],
    provider: null,

    creatorProfile: null,

    token: null,

    market: null,
  },
  reducers: {
    // General Succesful Api Call Handler
    setProvider: (state, action) => {
      state.account = action.payload.account;

      if (action.payload.provider) {
        state.provider = action.payload.provider;

        state.token = action.payload.token;

        state.market = action.payload.market;
      }
    },

    myProfile: (state, action) => {
      console.log('me', action.payload.profile)
      state.profile = action.payload.profile ? action.payload.profile : action.payload.profiles[0];
    },
    allProfiles: (state, action) => {
      console.log('aaaaa', action.payload);
      state.profiles = action.payload.profiles;

      if (state.profiles && state.profiles.length > 1) {
        state.profiles.sort((a, b) => b?.totalSold?.length - a?.totalSold?.length);
        state.profiles.sort((a, b) => b?.followers - a?.followers);
        state.profiles.sort((a, b) => b?.favorites - a?.favorites);
      }
    },
    createUser: (state, action) => {
      state.user = action.payload;
    },
    getCreator: (state, action) => {
      state.creatorProfile = action.payload.profile
      ? action.payload.profile
      : action.payload?.profiles[0];
    },

    editUser: (state, action) => {
      console.log(action.payload)
      state.profile = action.payload.profile
        ? action.payload.profile
        : action.payload?.profiles[0];
    },
  },
});

// -------------------------------------*****----------------------------------------

// ACTIONS

// extracting actions from slice
export const { setProvider, setBackend, myProfile, allProfiles, createUser, editUser, getCreator } = slice.actions;

// -------------------------------------*****----------------------------------------
// ACTION CREATORS

// utility variables

// Users LOGIN
export const userAuth = (data) => (dispatch) =>  dispatch(setProvider(data));

// SERVERLOGIN

export const loginBackend = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      backend: true,

      url: USERS.LOGIN_SERVER,

      method: REQUEST_METHODS.POST,

      credentials: true,
    })
  );

export const getMyProfileFn = () => (dispatch) =>
  dispatch(
    apiCallInit({
      url: USERS.GET_ME,

      method: REQUEST_METHODS.GET,

      credentials: true,

      onStart: profileStart.type,

      onSuccess: [myProfile.type, profileSuccess.type],

      onError: profileFailed.type,
    })
  );

  export const getAllProfilesFn = () => (dispatch) =>
  dispatch(
    apiCallInit({
      url: USERS.GET_ALL,

      method: REQUEST_METHODS.GET,

      credentials: true,

      onStart: loadStart.type,


      onSuccess: [allProfiles.type,loadFinish.type],

      onError: loadFinish.type,

    })
  );
// Users SIGN_UP

export const userRegister = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.SIGN_UP,

      method: REQUEST_METHODS.POST,

      credentials: true,

      // onStart: updateAttempt.type,

      onSuccess: createUser.type,

      // onError: updateFailed.type,
    })
  );

export const userEdit = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.EDIT_USER,

      method: REQUEST_METHODS.PATCH,

      credentials: true,

      onStart: loadStart.type,

      onSuccess: [editUser.type, loadSuccess.type],

      onError: loadFailed.type,
    })
  );

export const userEditPic = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.UPLOAD_PHOTO,

      method: REQUEST_METHODS.POST,

      credentials: true,

      contentType: "multipart/form-data",

      onStart: loadStart.type,

      onSuccess: [editUser.type, loadSuccess.type],

      onError: loadFailed.type,
    })
  );

  export const userEditCover = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.UPLOAD_COVER,

      method: REQUEST_METHODS.POST,

      credentials: true,

      contentType: "multipart/form-data",

      onStart: loadStart.type,

      onSuccess: [editUser.type, loadSuccess.type],

      onError: loadFailed.type,
    })
  );


export const getUser = (address) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: USERS.GET_USER(address),

      method: REQUEST_METHODS.GET,

      credentials: true,

      onStart: profileStart.type,

      onSuccess: [editUser.type, profileSuccess.type],

      onError: profileFailed.type,
    })
  );

export const getCreatorFn = (address) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: USERS.GET_USER(address),

      method: REQUEST_METHODS.GET,

      credentials: true,

      onStart: profileStart.type,

      onSuccess: [getCreator.type, profileSuccess.type],

      onError: profileFailed.type,
    })
  );

export const followUser = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.FOLLOW_USER,

      method: REQUEST_METHODS.POST,

      credentials: true,

      // onStart: updateAttempt.type,

      // onSuccess: editUser.type,

      // onError: updateFailed.type,
    })
  );

export const unfollowUser = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.UNFOLLOW_USER,

      method: REQUEST_METHODS.POST,

      credentials: true,

      // onStart: updateAttempt.type,

      // onSuccess: editUser.type,

      // onError: updateFailed.type,
    })
  );

export const getFollowers = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: USERS.GET_FOLLOWERS,

      method: REQUEST_METHODS.POST,

      credentials: true,

      // onStart: updateAttempt.type,

      // onSuccess: editUser.type,

      // onError: updateFailed.type,
    })
  );

// -------------------------------------*****----------------------------------------
// SELECTORS

// selecting the app  state

const auth = (state) => state.users.auth;

// selecting the state

export const currentAccount = createSelector([auth], (user) => user?.account);

export const providerInstance = createSelector(
  [auth],
  (user) => user?.provider
);

export const marketInstance = createSelector([auth], (user) => user?.market);

export const tokenInstance = createSelector([auth], (user) => user?.token);

export const currentProfile = createSelector([auth], (user) => user?.profile);

export const creatorProfile = createSelector([auth], (user) => user?.creatorProfile);

export const selectProfiles = createSelector([auth], (user) => user?.profiles);

export default slice.reducer;
