import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data-slice";
import uiReducer from "./ui-slice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    ui: uiReducer,
  },
});
