import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import configureAppStore from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
// const store = configureAppStore();
let persistor = persistStore(configureAppStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureAppStore}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
