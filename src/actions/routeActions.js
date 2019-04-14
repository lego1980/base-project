//defined switch statement actions
export const ROUTE_LOG_IN = 'ROUTE_LOG_IN';
export const ROUTE_LOG_OUT = 'ROUTE_LOG_OUT';
export const ROUTE_SIGN_UP = 'ROUTE_SIGN_UP';
export const ROUTE_HOME = 'ROUTE_HOME';
export const ROUTE_DEFAULT = 'ROUTE_DEFAULT';
export const ROUTE_ACCOUNT = 'ROUTE_ACCOUNT';
export const ROUTE_ABOUT_US = 'ROUTE_ABOUT_US';
export const ROUTE_CONTACT_US = 'ROUTE_CONTACT_US';
export const ROUTE_TERMS = 'ROUTE_TERMS';
export const ROUTE_USER_AGREEMENT = 'ROUTE_USER_AGREEMENT';

//defined route actions
export const ROUTE_ACTIONS = (dispatch) => {
    return {
        setLocationRoute: (options) => { 
            dispatch({type: options.type, route: options.route });
        }
    }
}


// export const GET_ROUTE = (dispatch) => { 
//     dispatch({type: ROUTE_DEFAULT, route: "/" });
// }

// export const GET_ROUTE_LOG_IN = (dispatch) => { 
//     dispatch({type: ROUTE_LOG_IN, route: "/login/" });
// }

// export const GET_ROUTE_SIGN_UP = (dispatch) => { 
//     dispatch({type: ROUTE_SIGN_UP, route: "/signup/" });
// }