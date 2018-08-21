import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const configureStore = (initialState, history) =>
  createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(applyMiddleware(routerMiddleware(history), thunk))
  );

export default configureStore;
