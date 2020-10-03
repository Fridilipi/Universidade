import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import loginReducer from "./Login/Reducers"

const defaultState = {
  state: (state = {}) => state,
};

const rootReducers = combineReducers({
  defaultState,
  loginReducer
});

const middlewares = [thunk];

const composeEnhancers = composeWithDevTools({ realtime: true });

const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(...middlewares)
)(createStore);

export const store = createStoreWithMiddleware(rootReducers);
