import { USERS_PENDING, USERS_FULFILLED, USERS_REJECTED } from'../actions/usersActions';

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_PENDING:
            return { 
                ...state,
                fetching: true,
                users : action.payload               
            };
        case USERS_FULFILLED:
            return { 
                ...state,
                fetching: false,
                fetched: true,
                users : action.payload               
            };         
        case USERS_REJECTED:
            return { 
                ...state,
                fetching: false,
                error : action.payload           
            };
        default:
            return state;
    }
}
