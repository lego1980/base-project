import { 
    GET_ROUTE, 
    SET_ROUTE
} from'../../actions/route/RouteActions';

const initialState = {
    fetching: false,
    fetched: false,
    type: GET_ROUTE,
    route: "/",    
    pathname: "/",
    error: null
};

export const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROUTE: 
            return { 
                ...state,
                type : action.type,
                route : action.route,
                pathname : window.location.pathname              
            };
        case GET_ROUTE: 
            return { 
                ...state,
                type : action.type             
            };
        default:
            return { 
                ...state              
            };
    }
}
