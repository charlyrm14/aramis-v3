import { configureStore } from "@reduxjs/toolkit";
import polizaReducer from "./Poliza/polizaSlice";

export const store = configureStore({
  reducer: {
    poliza: polizaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
