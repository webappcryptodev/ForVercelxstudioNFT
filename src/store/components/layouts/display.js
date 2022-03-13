/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

import { createSelector } from "reselect";

// import { alert, TYPE } from "../../../components/alert";

// CREATING A SLICE

// creating and handling dispatched actions using corresponding reducers
const slice = createSlice({
  name: "layout",

  initialState: {
    loading: true,

    validating: true,

    uploading: false,

    updating: false,

    deactivating: false,
  },

  reducers: {
    // General Api Or Action Init Handler

    updateAttempt: (state) => {
      // show spinner

      state.updating = true;
    },
    updateFailed: (state, action) => {
      // show spinner

      state.updating = false;

      alert(action.payload);
    },

    updateSuccess: (state, action) => {
      // hide spinner

      state.updating = false;

      alert(action.payload.message || "Updated Successfully!");

      // alert('Details Updated Successfully...', TYPE.SUCCESS);
    },

    uploadAttempt: (state) => {
      // show spinner

      state.uploading = true;
    },
    uploadFailed: (state) => {
      // show spinner

      state.uploading = false;

      alert("Upload Failed!");
    },

    uploadSuccess: (state) => {
      // hide spinner

      state.uploading = false;

      // alert('Upload Successfull!', TYPE.SUCCESS, {
      //   position: 'top-center',
      // });

      // alert('Details Updated Successfully...', TYPE.SUCCESS);
    },

    postValidation: (state, action) => {
      state.validating = false;

      alert(action.payload);
    },

    detailsUpdateAttempt: (state) => {
      // show spinner

      state.detailsUpdate = true;
    },
    detailsUpdateFailed: (state, action) => {
      // hide spinner

      state.detailsUpdate = false;

      alert(action.payload);
    },

    detailsUpdateSuccess: (state, action) => {
      // hide spinner

      state.detailsUpdate = false;

      alert(action.payload.message || "Updated Successfully!");
    },

    deactivateAttempt: (state) => {
      // show spinner

      state.deactivating = true;
    },
    deactivateFailed: (state, action) => {
      // show spinner

      state.deactivating = false;

      alert(action.payload);
    },

    deactivateSuccess: (state, action) => {
      // hide spinner

      state.deactivating = false;

      alert(action.payload.message || "Account Deleted Successfully!");
    },

    actionAttempt: (state) => {
      // show spinner

      state.loading = true;
    },

    // General Succesful Api Call Handler

    actionSuccess: (state) => {
      // hide spinner

      state.loading = false;
    },

    actionSuccessMessage: (state, action) => {
      // hide spinner

      state.loading = false;

      alert(action.payload.message);
    },

    actionFailed: (state, action) => {
      state.loading = false;

      alert(action.payload);
    },

    // general unSuccesful  validation

    actionFailedMaster: (state) => {
      state.loading = false;
    },
  },
});

// -------------------------------------*****----------------------------------------

// ACTIONS

// extracting actions from slice
export const {
  updateAttempt,
  updateFailed,
  updateSuccess,
  deactivateAttempt,
  deactivateFailed,
  deactivateSuccess,
  actionAttempt,
  actionFailed,
  actionFailedMaster,
  actionSuccessMessage,
} = slice.actions;

// -------------------------------------*****----------------------------------------
// ACTION CREATORS

// -------------------------------------*****----------------------------------------
// SELECTORS

// selecting the app loading state

const isUpdating = (state) => state.layouts.display;

export const selectAppLoadState = createSelector(
  [isUpdating],
  (app) => app.loading
);

export const selectUpdateState = createSelector(
  [isUpdating],
  (app) => app.updating
);

export const selectDetailsUpdate = createSelector(
  [isUpdating],
  (app) => app.detailsUpdate
);

export const loadingDetails = createSelector(
  [isUpdating],
  (professions) => professions.detailsLoad
);

export default slice.reducer;
