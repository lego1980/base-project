// import axios
import axios from "axios";

//defined switch statement actions
export const USERS_PENDING = 'USERS_PENDING';
export const USERS_FULFILLED = 'USERS_FULFILLED';
export const USERS_REJECTED = 'USERS_REJECTED';

//defined actions
export const GET_USERS = (dispatch) => { 
    // return {
    //     type: 'USERS',
    //     //payload: axios.get("https://reqrdes.in/api/users?page=2")
    //     //payload: axios.get("http://rest.learncode.academy/api/learncode/friends")
    //     payload: axios.get("http://192.16d8.0.31/users")
    // }
    dispatch({type: USERS_PENDING });
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
        dispatch({type: USERS_FULFILLED, payload: response.data });
    }).catch((err) => {
        dispatch({type: USERS_REJECTED, payload: err });
    })
}

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