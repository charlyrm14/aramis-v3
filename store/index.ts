import { configureStore } from "@reduxjs/toolkit";
import polizaReducer from "./PolizaAseguradora/polizaSlice";

export const store = configureStore({
  reducer: {
    poliza: polizaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
