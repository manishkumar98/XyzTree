import ReactDOM from "react-dom";

import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import data from "./data";
const rootElement = document.getElementById("root");
const store = createStore(reducers, data);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
