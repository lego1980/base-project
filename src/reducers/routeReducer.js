import { 
    ROUTE_LOG_IN, 
    ROUTE_LOG_OUT, 
    ROUTE_SIGN_UP, 
    ROUTE_HOME, 
    ROUTE_DEFAULT,
    ROUTE_ACCOUNT,
    ROUTE_ABOUT_US,
    ROUTE_CONTACT_US,
    ROUTE_TERMS,
    ROUTE_USER_AGREEMENT
} from'../actions/routeActions';

const initialState = {
    fetching: false,
    fetched: false,
    route: ROUTE_DEFAULT,
    error: null
};

export const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROUTE_LOG_IN: 
            return { 
                ...state,
                route : ROUTE_LOG_IN               
            };
        case ROUTE_LOG_OUT: 
            return { 
                ...state,
                route : ROUTE_LOG_OUT               
            };  
        case ROUTE_SIGN_UP: 
            return { 
                ...state,
                route : ROUTE_SIGN_UP               
            };
        case ROUTE_HOME: 
            return { 
                ...state,
                route : ROUTE_HOME               
            };
        case ROUTE_ACCOUNT: 
            return { 
                ...state,
                route : ROUTE_ACCOUNT               
            };
        case ROUTE_ABOUT_US: 
            return { 
                ...state,
                route : ROUTE_ABOUT_US               
            };
        case ROUTE_CONTACT_US: 
            return { 
                ...state,
                route : ROUTE_CONTACT_US               
            };
            break; 
        case ROUTE_TERMS: 
            return { 
                ...state,
                route : ROUTE_TERMS               
            };
        case ROUTE_USER_AGREEMENT: 
            return { 
                ...state,
                route : ROUTE_ABOUT_US               
            };        
        default:
            return { 
                ...state              
            };
    }
}
