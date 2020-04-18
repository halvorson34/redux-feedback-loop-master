import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingReducer = (state = "", action) => {
  return;
};

const comprehensionReducer = (state = "", action) => {
  return;
};

const supportReducer = (state = "", action) => {
  return;
};

const commentsReducer = (state = "", action) => {
  return;
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
