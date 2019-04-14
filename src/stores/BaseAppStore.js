import { combineReducers } from 'redux';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";

import { routeReducer } from'../reducers/routeReducer';
import { usersReducer } from'../reducers/usersReducer';

// create base app combine reducers
const BaseAppCombineReducer = combineReducers({
    routeReducer,
    usersReducer
});

// create middleware with compose for redux dev tools
const middleware = compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

//export BaseStore
export const BaseAppStore = createStore(
    BaseAppCombineReducer,
    middleware
);
  