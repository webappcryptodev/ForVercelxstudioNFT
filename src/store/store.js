import { configureStore } from "@reduxjs/toolkit";

// import storage from "redux-persist/lib/storage/session";

// import { persistStore } from "redux-persist";

import ApiHandler from "./middlewares/api";

import reducer from "./reducer";

// storage used is session storage

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["users"],
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// Application Store - Toolkit Brings in Redux Thunk and ... Using getDefaultMiddleware func
const store = () => {
  const storeConfig = configureStore({
    // reducer: persistedReducer,
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      ApiHandler,
    ],
  });

  // const persistedStore = persistStore(storeConfig);

  return { storeConfig };
};

export default store;
