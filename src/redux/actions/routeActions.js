//defined switch statement actions
export const GET_ROUTE = 'GET_ROUTE';
export const SET_ROUTE = 'SET_ROUTE';

//defined route actions
export const ROUTE_ACTIONS = (dispatch) => {
    return {
        getLocationRoute: (options) => {
            dispatch({type: options.type});
        },
        setLocationRoute: (options) => { 
            dispatch({type: options.type, route: options.route });
        }
    }
}