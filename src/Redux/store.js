import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./Slices/todoSlices";

export const store = configureStore({
  reducer: {todoReducer},
});
