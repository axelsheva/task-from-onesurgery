import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

import registerServiceWorker from "./registerServiceWorker";

import configureStore from "./store/configureStore";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const history = createBrowserHistory();

const store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
