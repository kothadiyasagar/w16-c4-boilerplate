// create store here
import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const composeEnhancers =
  typeof window === "object" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
    ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = createStore(reducer, enhancer);

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}