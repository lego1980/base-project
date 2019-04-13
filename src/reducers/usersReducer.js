import { GET_USERS, POST_USERS, PUT_USERS, PATCH_USERS, DELETE_USERS } from'../actions/usersActions';

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { 
                ...state,
                users : action.payload               
            };
            break;
        case POST_USERS:
            return { 
                ...state,
                users : action.payload               
            }; 
            break;   
        default:
            return state;
    }
}
