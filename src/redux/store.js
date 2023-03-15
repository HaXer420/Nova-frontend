import { combineReducers, configureStore } from "@reduxjs/toolkit";
import activeTabSlice from "./activeTabSlice";
import showModal from "./showModalSlice";
import loginSlice from "./loginSlice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: localStorage,
  blacklist: ["modal", "shop", "login"],
};
const reducer = combineReducers({
  activeTab: activeTabSlice,
  showModal: showModal,
  loginSlice: loginSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const configureAppStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([]),
  });
};
export default configureAppStore;
