import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App.jsx";
import reducer from "./reducers/reducer.js";
var store = createStore(reducer);

import "./styles.css";

store.subscribe(() => {
  console.log(store.getState());
});
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
