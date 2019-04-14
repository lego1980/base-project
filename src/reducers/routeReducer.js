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
    type: ROUTE_DEFAULT,
    route: "/",    
    pathname: "/",
    error: null
};

export const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROUTE_LOG_IN: 
            return { 
                ...state,
                type : action.type,
                route : action.route,
                pathname : window.location.pathname              
            };
        case ROUTE_LOG_OUT: 
            return { 
                ...state,
                type : action.type,
                route : action.route,
                pathname : window.location.pathname              
            };  
        case ROUTE_SIGN_UP: 
            return { 
                ...state,
                type : action.type,
                route : action.route,
                pathname : window.location.pathname               
            };
        case ROUTE_HOME: 
            return { 
                ...state,
                type : action.type,
                route : action.route,
                pathname : window.location.pathname               
            };
        case ROUTE_ACCOUNT: 
            return { 
                ...state,
                type : action.type,
                route : action.route,
                pathname : window.location.pathname               
            };
        case ROUTE_ABOUT_US: 
            return { 
                ...state,
                type : action.type,
                route : action.route,
                pathname : window.location.pathname               
            };
        case ROUTE_CONTACT_US: 
            return { 
                ...state,
                type : action.type,
                route : action.route,
                pathname : window.location.pathname               
            };
            break; 
        case ROUTE_TERMS: 
            return { 
                ...state,
                type : action.type,
                route : action.route,
                pathname : window.location.pathname               
            };
        case ROUTE_USER_AGREEMENT: 
            return { 
                ...state,
                type : action.type,
                route : action.route,
                pathname : window.location.pathname               
            };        
        default:
            return { 
                ...state              
            };
    }
}
