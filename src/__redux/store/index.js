import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

const preloadedState = {};
const middlewares = [thunk];

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() for redux devtools extension
export const store = createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(...middlewares),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
