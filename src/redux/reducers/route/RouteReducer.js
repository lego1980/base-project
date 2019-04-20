import { 
    GET_ROUTE, 
    SET_ROUTE
} from'../../actions/route/RouteActions';

const initialState = {
    type: GET_ROUTE,
    location: null,
    error: null
};

export const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROUTE: 
            return { 
                ...state,
                type : action.type,
                location : action.location           
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
