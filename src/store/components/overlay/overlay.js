/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

import { createSelector } from "reselect";

// import { apiCallInit } from "../../actions";

import {Notify} from "notiflix";

// CREATING A SLICE

// creating and handling dispatched actions using corresponding reducers
const slice = createSlice({
  name: "overlay",
  initialState: {
    loading: false,
    profileLoad: false,
  },
  reducers: {
    // General Succesful Api Call Handler
    loadStart: (state) => {
      state.loading = true;
    },

    profileStart: (state) => {
      state.profileLoad = true;
    },

    loadFinish: (state) => {
      state.loading = false;
    },
    profileFinish: (state) => {
      state.profileFinish = false;
    },

    loadFailed: (state, action) => {
      state.loading = false;

      Notify.failure(action.payload)
    },

    profileFailed: (state, action) => {
      state.profileLoad = false;
    },


    profileSuccess: (state, action) => {
      state.profileLoad = false;
    },
    loadSuccess: (state, action) => {
      state.loading = false;

      console.log(action)

      Notify.success(action.payload.message)
    }

    
  },
  
});

// -------------------------------------*****----------------------------------------

// ACTIONS

// extracting actions from slice
export const { loadStart, loadFinish, loadFailed, loadSuccess, profileStart, profileFinish, profileFailed, profileSuccess } = slice.actions;

// -------------------------------------*****----------------------------------------

export const loading = () => (dispatch) => dispatch({ type: loadStart.type });
  
export const loaded = () => (dispatch) => dispatch({ type: loadFinish.type });

export const loadSuccessWithMessage = () => (dispatch) => dispatch({ type: loadFailed.type });

export const loadFailureWithMessage = () => (dispatch) => dispatch({ type: loadSuccess.type });

 
// -------------------------------------*****----------------------------------------
// SELECTORS

// selecting the app  state

const overlayAppState = (state) => state.overlay.overlay;
// selecting the state

export const overlayState = createSelector(
  [overlayAppState],
  (state) => state?.loading
);

export const profileLoading = createSelector(
  [overlayAppState],
  (state) => state?.profileLoad
);
export default slice.reducer;
