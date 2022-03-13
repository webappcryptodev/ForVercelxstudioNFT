import React from "react";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
// import W3Connection from "./store/provider";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import appStore from "./store/store";
import "./index.css";
import RouteToTop from "./components/RouteToTop";

// Initializes The App Store
const state = appStore();

// exporting state to enable dispatch usage outside react component
export const { storeConfig } = state;

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

ReactDOM.render(
  <Router>
   
      <RouteToTop>
        <Provider store={storeConfig}>
          {/* <PersistGate loading={null} persistor={persistedStore}> */}
          <Web3ReactProvider getLibrary={getLibrary}>
            <App />        
          </Web3ReactProvider>
          {/* </PersistGate> */}
        </Provider>
    </RouteToTop>
  </Router>,
  document.getElementById("root")
);
