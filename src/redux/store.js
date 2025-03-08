import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dataApi } from "../api/dataApi";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,

    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([dataApi.middleware]),
});

setupListeners(store.dispatch);
