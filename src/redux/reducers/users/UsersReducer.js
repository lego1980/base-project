import { GET_USERS_PENDING, GET_USERS_FULFILLED, GET_USERS_REJECTED, GET_USERS } from'../../actions/users/UsersActions';

const initialState = {
    fetching: false,
    fetched: false,
    users: null,
    error: null
};

export const usersReducer = (state = initialState, action) => {
    console.log("usersReducer",action);
    switch (action.type) {
        case GET_USERS:
            return { 
                ...state             
            };
        case GET_USERS_PENDING:
            return { 
                ...state,
                fetching: true,
                users : action.payload               
            };
        case GET_USERS_FULFILLED:
            return { 
                ...state,
                fetching: false,
                fetched: true,
                users : action.payload               
            };         
        case GET_USERS_REJECTED:
            return { 
                ...state,
                fetching: false,
                error : action.payload           
            };
        default:
            return state;
    }
}
