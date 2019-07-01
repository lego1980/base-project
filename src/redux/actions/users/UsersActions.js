// import axios
import axios from "axios";

//defined type actions for reducers
export const GET_USERS = 'GET_USERS';
export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

//defined users actions
export const USERS_ACTIONS = (dispatch) => {
    return {
        initUsers: (options) => { 
            dispatch({type: GET_USERS_PENDING});
            return axios.get("https://reqres.in/api/users?page="+options.page).then((response) => {
                return dispatch({type: GET_USERS_FULFILLED, payload: response.data });
            
            }).catch((err) => {
                return dispatch({type: GET_USERS_REJECTED, payload: err });
            });
        },
        getUsers: (options) => { 
            dispatch({type: GET_USERS});
        }
    }
}