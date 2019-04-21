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
            dispatch({type: GET_USERS_PENDING });
            axios.get("https://reqres.in/api/users?page="+options.page).then((response) => {
                dispatch({type: GET_USERS_FULFILLED, payload: response.data });
            }).catch((err) => {
                dispatch({type: GET_USERS_REJECTED, payload: err });
            });
        }
    }
}

// export const USER_ACTIONS = (dispatch) => {
//     return {
//         getUser: (options) => {
//         },
//         updateUser: (options) => {
//         },
//         deleteUser: (options) => {
//         },
//         createUser: (options) => {
//         }
//     }
// }

//defined actions
// export const GET_USERS = (dispatch) => { 
//     // return {
//     //     type: 'USERS_FULFILLED',
//     //     payload: axios.get("https://reqrdes.in/api/users?page=2")
//     //     //payload: axios.get("http://rest.learncode.academy/api/learncode/friends")
//     //     //payload: axios.get("http://192.16d8.0.31/users")
//     // }
//     return {
//         call: () => { 
//             dispatch({type: USERS_PENDING });
//             axios.get("https://reqres.in/api/users?page=2").then((response) => {
//                 dispatch({type: USERS_FULFILLED, payload: response.data });
//             }).catch((err) => {
//                 dispatch({type: USERS_REJECTED, payload: err });
//             });
//         }
//     }
// }

// export const postUsers = () => { 
//     return {
//         type: 'POST_USERS',
//         payload:  [{ fname : 'Ron1' }, { fname : 'Tsendayush1' }, { fname: 'Noah1' }]
//     }
// }

// export const putUsers = () => { 
//     return {
//         type: 'PUT_USERS',
//         payload: []
//     }
// }

// export const patchUsers = () => { 
//     return {
//         type: 'PATCH_USERS',
//         payload: []
//     }
// }

// export const deleteUsers = () => { 
//     return {
//         type: 'DELETE_USERS',
//         payload: []
//     }
// }