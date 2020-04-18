import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingReducer = (state = "", action) => {
  return null;
};

const comprehensionReducer = (state = "", action) => {
  return null;
};

const supportReducer = (state = "", action) => {
  return null;
};

const commentsReducer = (state = "", action) => {
  return null;
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
