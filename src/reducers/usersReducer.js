import { GET_USERS, POST_USERS, PUT_USERS, PATCH_USERS, DELETE_USERS } from'../actions/usersActions';

export const usersStore = (state = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return [ 
                ...state,
                { users : action.payload }               
            ]
        case POST_USERS:
            return [
                ...state,
                { users : action.payload }               
            ]    
        default:
            return state;
    }
}
