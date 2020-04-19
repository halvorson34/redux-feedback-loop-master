import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingReducer = (state = {}, action) => {
  if (action.type === "SET_FEELING_RATING") {
    return action.payload;
  }

  return state;
};

const comprehensionReducer = (state = {}, action) => {
  if (action.type === "SET_COMPREHENSION_RATING") {
    return action.payload;
  }
  return state;
};

const supportReducer = (state = {}, action) => {
  if (action.type === "SET_SUPPORT_RATING") {
    return action.payload;
  }
  return state;
};

const commentsReducer = (state = "", action) => {
  if (action.type === "SET_COMMENTS_INPUT") {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    comprehensionReducer,
    supportReducer,
    commentsReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
