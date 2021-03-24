import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import { createLogger } from "redux-logger";
import thunkMiddleWare from "redux-thunk";
import "tachyons";
import App from "./containers/App";
import { searchRobots, getRobots } from "./reducers";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

//The logger helps to identify action while building the app
//const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, getRobots });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleWare))
); // user (rootReducer) if you have many reducers

//use the provider to pass the store to all component tree
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
