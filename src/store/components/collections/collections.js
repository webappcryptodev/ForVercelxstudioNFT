/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

import { createSelector } from "reselect";

import { apiCallInit } from "../../actions";


import {
  loadStart, loadFinish,loadFailed,loadSuccess
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
  ROUTES: { COLLECTIONS },
} = CONSTANTS;

// CREATING A SLICE

// creating and handling dispatched actions using corresponding reducers
const slice = createSlice({
  name: "collections",
  initialState: {
    // collection: null,
    allCollections: [],
    myCollections: [],
    creatorCollections: [],
    myCollection: null,
    singleCollection: null,
  },
  reducers: {
    // General Succesful Api Call Handler

    createCollection: (state, action) => {
      state.myCollections.push(action.payload.collection);
      state.allCollections.push(action.payload.collection);
    },

    getMyCollections: (state, action) => {
      state.myCollections = action.payload.collections;
    },

    getMyCollection: (state, action) => {
      state.myCollection = action.payload.collection;
    },

    updateMyCollection: (state, action) => {
      state.myCollection = action.payload.collection;
    },

    deleteMyCollection: (state, _) => {
      state.myCollection = {};
    },

    getAllCollections: (state, action) => {
      state.allCollections = action.payload.collections;
    },

    getCreatorCollections: (state, action) => {
      state.creatorCollections = action.payload.collections;
    },

    clearCreatorCollections: (state, _) => {
      state.creatorCollections = [];
    },

    getSingleCollection: (state, action) => {
      state.singleCollection = action.payload.collection;
    },
    
  },
});

// -------------------------------------*****----------------------------------------

// ACTIONS

// extracting actions from slice
const { 
  createCollection,
  getMyCollections,
  getMyCollection,
  updateMyCollection,
  deleteMyCollection,
  getAllCollections,
  getCreatorCollections,
  clearCreatorCollections,
  getSingleCollection

} = slice.actions;

// -------------------------------------*****----------------------------------------
// ACTION CREATORS

// utility variables


// Create Collection
export const collectionCreationFn = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: COLLECTIONS.CREATE,

      method: REQUEST_METHODS.POST,

      // onStart: updateAttempt.type,

      onSuccess: createCollection.type,

      // onError: updateFailed.type,
    })
  );

export const allMyCollectionsFn = () => (dispatch) =>
  dispatch(
    apiCallInit({
      url: COLLECTIONS.GET_MY_ALL,

      method: REQUEST_METHODS.GET,

      onStart: loadStart.type,

      onSuccess: [getMyCollections.type, loadFinish.type],

      onError: loadFinish.type,
    })
  );

export const myCollectionFn = (id) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: COLLECTIONS.GET_MY_SINGLE(id),

      method: REQUEST_METHODS.GET,

      // onStart: updateAttempt.type,

      onSuccess: getMyCollection.type,

      // onError: updateFailed.type,
    })
  );

export const myCollectionUpdateFn = (id, data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: COLLECTIONS.UPDATE_MY_SINGLE(id),

      method: REQUEST_METHODS.PATCH,

      // onStart: updateAttempt.type,

      onSuccess: updateMyCollection.type,

      // onError: updateFailed.type,
    })
  );

export const myCollectionDeleteFn = (id) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: COLLECTIONS.DELETE_MY_SINGLE(id),

      method: REQUEST_METHODS.DELETE,

      // onStart: updateAttempt.type,

      onSuccess: deleteMyCollection.type,

      // onError: updateFailed.type,
    })
  );

export const allCollectionsFn = () => (dispatch) =>
  dispatch(
    apiCallInit({
      url: COLLECTIONS.GET_ALL,

      method: REQUEST_METHODS.GET,

      // onStart: updateAttempt.type,

      onSuccess: getAllCollections.type,

      // onError: updateFailed.type,
    })
  );

export const creatorCollectionsFn = (profile) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: COLLECTIONS.GET_BY_USER(profile),

      method: REQUEST_METHODS.GET,

      onStart: [clearCreatorCollections.type, loadStart.type],

      onSuccess: [getCreatorCollections.type, loadFinish.type],

      onError: loadFinish.type,
    })
  );
export const clearCreatorCollectionsFn = () => (dispatch) =>
  dispatch(
    clearCreatorCollections.type
  );

export const singleCollectionFn = (id) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: COLLECTIONS.GET_SINGLE(id),

      method: REQUEST_METHODS.GET,

      onStart: loadStart.type,

      onSuccess: [getSingleCollection.type, loadFinish.type],

      onError: loadFinish.type,
    })
  );

  export const userCollectionFn = (id) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: COLLECTIONS.GET_BY_USER(id),

      method: REQUEST_METHODS.GET,

      onStart: loadStart.type,

      onSuccess: [getMyCollections.type, loadFinish.type],

      onError: loadFinish.type,
    })
  );

export const collectionEditPic = (id, data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: COLLECTIONS.UPLOAD_IMAGE(id),

      method: REQUEST_METHODS.POST,

      credentials: true,

      contentType: "multipart/form-data",

      onStart: loadStart.type,

      onSuccess: [updateMyCollection.type, loadSuccess.type],

      onError: loadFailed.type,
    })
  );




// -------------------------------------*****----------------------------------------
// SELECTORS

// selecting the app  state

const collectionsParams = (state) => state.collections.collections;
// selecting the state

export const selectMyCollections = createSelector(
  [collectionsParams],
  (colls) => colls?.myCollections
);

export const selectMyCollection = createSelector(
  [collectionsParams],
  (colls) => colls?.myCollection
);

export const selectAllCollections = createSelector(
  [collectionsParams],
  (colls) => colls?.allCollections
);

export const selectCreatorCollections = createSelector(
  [collectionsParams],
  (colls) => colls?.creatorCollections
);

export const selectCollection = createSelector(
  [collectionsParams],
  (colls) => colls?.singleCollection
);

export default slice.reducer;
