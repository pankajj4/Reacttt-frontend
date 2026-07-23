import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch