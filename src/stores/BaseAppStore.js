import { createStore } from 'redux'

//reducers
import { BaseAppStore } from '../reducers/BaseAppReducer';

//actions
import { getUsers, postUsers } from '../actions/usersActions';

export const storeApp = createStore(
    BaseAppStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Log the initial state
console.log('initial state', storeApp.getState());
storeApp.dispatch(getUsers());
console.log('get state', storeApp.getState());