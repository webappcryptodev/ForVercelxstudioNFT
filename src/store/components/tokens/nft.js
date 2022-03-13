/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

import { createSelector } from "reselect";

import { apiCallInit } from "../../actions";

import CONSTANTS from "../../constants";

import {
  loadStart,
  // loadSuccess,
  loadFailed,
  loadFinish
} from '../overlay/overlay';

// import { alert, TYPE } from '../../../components/alert';

const {
  REQUEST_METHODS,
  ROUTES: { NFTS },
} = CONSTANTS;

// CREATING A SLICE

// creating and handling dispatched actions using corresponding reducers
const slice = createSlice({
  name: "nfts",
  initialState: {
    // nft: null,
    allNfts: [],
    allRecentNfts: [],
    myNfts: [],
    collectionNfts: [],
    myCollectionNfts: [],
    myNft: null,
    singleNft: null,
  },
  reducers: {
    // General Successful Api Call Handler

    createNft: (state, action) => {
      state.allNfts.push(action.payload.nft);
      state.myNfts.push(action.payload.nft);

      if (state.myCollectionNfts[0].collection_id === action.payload.nft.collection_id) state.myCollectionNfts.push(action.payload.nft);
      
      if (state.collectionNfts[0].collection_id === action.payload.nft.collection_id) state.collectionNfts.push(action.payload.nft);
    },

    getMyNfts: (state, action) => {
      state.myNfts = action.payload.nfts;
    },

    getMyCollectionNfts: (state, action) => {
      state.myCollectionNfts = action.payload.nfts;
    },

    getMyNft: (state, action) => {
      state.myNft = action.payload.nft;
    },

    updateMyNft: (state, action) => {
      state.myNft = action.payload.nft;
    },

    deleteMyNft: (state, _) => {
      state.myNft = {};
    },

    getAllNfts: (state, action) => {
      state.allNfts = action.payload.nfts;
    },

    getAllRecentNfts: (state, action) => {
      state.allRecentNfts = action.payload.nfts;
    },
    getCollectionNfts: (state, action) => {
      state.collectionNfts = action.payload.nfts;
    },

    getSingleNft: (state, action) => {
      state.singleNft = action.payload.nft;
    },
  },
});

// -------------------------------------*****----------------------------------------

// ACTIONS

// extracting actions from slice
const { 
  createNft,
  getMyNfts,
  getMyCollectionNfts,
  getCollectionNfts,
  getAllRecentNfts,
  getMyNft,
  updateMyNft,
  deleteMyNft,
  getAllNfts,
  getSingleNft

} = slice.actions;

// -------------------------------------*****----------------------------------------
// ACTION CREATORS

// utility variables


// Create Nft
export const nftCreationFn = (data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: NFTS.CREATE,

      method: REQUEST_METHODS.POST,

      onStart: loadStart.type,

      onSuccess: [createNft.type],

      // onError: loadFailed.type,
    })
  );

  // Create Nft
export const buyTokenFn = (id, data) => (dispatch) =>
dispatch(
  apiCallInit({
    data,

    url: NFTS.BUY(id),

    method: REQUEST_METHODS.POST,

    onStart: loadStart.type,

    onSuccess: createNft.type,

    onError: loadFailed.type,
  })
);

export const MyNftsFn = () => (dispatch) =>
  dispatch(
    apiCallInit({
      url: NFTS.GET_MY_ALL,

      method: REQUEST_METHODS.GET,

      onStart: loadStart.type,

      onSuccess: [getMyNfts.type, loadFinish.type],

      onError: loadFailed.type,
    })
  );

export const myCollectionNftsFn = (collection) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: NFTS.GET_MY_COLLECTION_ALL(collection),

      method: REQUEST_METHODS.GET,

      onStart: loadStart.type,

      onSuccess: [getMyCollectionNfts.type, loadFinish.type],

      onError: loadFailed.type,
    })
  );

export const myNftFn = (id) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: NFTS.GET_MY_SINGLE(id),

      method: REQUEST_METHODS.GET,

      onStart: loadStart.type,

      onSuccess: [getMyNft.type, loadFinish.type],

      onError: loadFailed.type,
    })
  );

export const myNftUpdateFn = (id, data) => (dispatch) =>
  dispatch(
    apiCallInit({
      data,

      url: NFTS.UPDATE_MY_SINGLE(id),

      method: REQUEST_METHODS.PATCH,

      onStart: loadStart.type,

      onSuccess: [updateMyNft.type, loadFinish.type],

      onError: loadFailed.type,
    })
  );

export const myNftDeleteFn = (id) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: NFTS.DELETE_MY_SINGLE(id),

      method: REQUEST_METHODS.DELETE,

      onStart: loadStart.type,

      onSuccess: [deleteMyNft.type,loadFinish.type],

      onError: loadFailed.type,
    })
  );

export const collectionNftsFn = (collection) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: NFTS.GET_COLLECTION_ALL(collection),

      method: REQUEST_METHODS.GET,

      onStart: loadStart.type,

      onSuccess: [getCollectionNfts.type,loadFinish.type],

      onError: loadFailed.type,
    })
  );
export const allNftsFn = () => (dispatch) =>
  dispatch(
    apiCallInit({
      url: NFTS.GET_ALL,

      method: REQUEST_METHODS.GET,

      onStart: loadStart.type,

      onSuccess: [getAllNfts.type, loadFinish.type],

      onError: loadFailed.type,
    })
  );
export const allRecentNftsFn = () => (dispatch) =>
  dispatch(
    apiCallInit({
      url: NFTS.GET_ALL_RECENT,

      method: REQUEST_METHODS.GET,

      onStart: loadStart.type,

      onSuccess: [getAllRecentNfts.type,loadFinish.type],

      onError: loadFailed.type,
    })
  );

export const singleNftFn = (id) => (dispatch) =>
  dispatch(
    apiCallInit({
      url: NFTS.GET_SINGLE(id),

      method: REQUEST_METHODS.GET,

      onStart: loadStart.type,

      onSuccess: [getSingleNft.type, loadFinish.type],

      onError: loadFailed.type,
    })
  );





// -------------------------------------*****----------------------------------------
// SELECTORS

// selecting the app  state

const nftsParams = (state) => state.tokens.nfts;
// selecting the state
export const selectMyNfts = createSelector(
  [nftsParams],
  (colls) => colls?.myNfts
);

export const selectMyCollectionNfts = createSelector(
  [nftsParams],
  (colls) => colls?.myCollectionNfts
);

export const selectMyNft = createSelector(
  [nftsParams],
  (colls) => colls?.myNft
);

export const selectAllNfts = createSelector(
  [nftsParams],
  (colls) => colls?.allNfts
);

export const selectAllRecentNfts = createSelector(
  [nftsParams],
  (colls) => colls?.allRecentNfts
);

export const selectCollectionNfts = createSelector(
  [nftsParams],
  (colls) => colls?.collectionNfts
);

export const selectNft = createSelector(
  [nftsParams],
  (colls) => colls?.singleNft
);

export default slice.reducer;
