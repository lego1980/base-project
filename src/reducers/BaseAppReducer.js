import { combineReducers } from 'redux';
import { usersStore } from'./usersReducer';

export const BaseAppStore = combineReducers({
    usersStore
});