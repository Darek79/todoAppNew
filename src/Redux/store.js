import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import todoReducer from "./Reducers/appReducer";
const loggerMiddleware = createLogger();

// const rootReducer = combineReducers({
//   todoReducer,
// });

export const store = configureStore({
  reducer: {
    todoReducer,
  },
});

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     thunkMiddleware,
//     loggerMiddleware
//   )
// );

// store.subscribe(() => {
//   console.log(store.getState());
// });
