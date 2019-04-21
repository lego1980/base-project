// core
import { combineReducers } from 'redux';
import { applyMiddleware, createStore, compose } from 'redux';

// middleware
import logger from "redux-logger";
import thunk from "redux-thunk";

// reducers
import { routeReducer } from'../../reducers/route/RouteReducer';
import { usersReducer } from'../../reducers/users/UsersReducer';

// create base app combine reducers
const BaseAppCombineReducer = combineReducers({
    route : routeReducer,
    users : usersReducer

});

// create middleware with compose for redux dev tools
const middleware = compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

// export BaseStore
export const BaseAppStore = createStore(
    BaseAppCombineReducer,
    middleware
);
  