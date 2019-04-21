// import axios
import axios from "axios";

//defined type actions for reducers
export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

//defined users actions
export const USERS_ACTIONS = (dispatch) => {
    return {
        getUsers: (options) => { 
            dispatch({type: GET_USERS_PENDING});
            axios.get("https://reqres.in/api/users?page="+options.page).then((response) => {
                dispatch({type: GET_USERS_FULFILLED, payload: response.data });
                // setTimeout(() => {
                //     dispatch({type: GET_USERS_FULFILLED, payload: response.data });
                // }, 10000);
            
            }).catch((err) => {
                dispatch({type: GET_USERS_REJECTED, payload: err });
            });
        }
    }
}