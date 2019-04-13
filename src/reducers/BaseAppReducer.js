import { combineReducers } from 'redux';
import { usersReducer } from'./usersReducer';

export const BaseAppReducer = combineReducers({
    usersReducer
});