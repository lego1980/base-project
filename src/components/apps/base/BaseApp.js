// core
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

// transition group plugin
import { CSSTransition } from 'react-transition-group';

// css
import './BaseApp.css';
import '../../styles/transitionGroup/page.css';

// mudules - components
import HeaderModule from '../../modules/header/HeaderModule';

// views - components
import HomeView from '../../views/home/HomeView';
import SignUpView from '../../views/signup/SignUpView';
import LoginView from '../../views/login/LoginView';
import AccountView from '../../views/account/AccountView';
import AboutView from '../../views/about/AboutView';
import ContactView from '../../views/contact/ContactView';
import ErrorView from '../../views/error/ErrorView';

// actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RouteActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

// routes
const routes = [
  { path: '/', name: 'About', Component: HomeView },
  { path: '/login', name: 'LogIn', Component: LoginView },
  { path: '/signup', name: 'SignUp', Component: SignUpView },
  { path: '/account', name: 'Account', Component: AccountView },
  { path: '/about', name: 'About', Component: AboutView },
  { path: '/contanct', name: 'Contact', Component: ContactView },
  { path: '/contact', name: 'Error', Component: ErrorView },
]

export class BaseApp extends React.Component {
  componentWillMount() {   
    
    let getRouteOptions = {type:"GET_ROUTE"};  
    this.props.getLocationRoute(getRouteOptions);

    let setRouteOptions = {type:"SET_ROUTE",route:"/signup/"};  
    this.props.setLocationRoute(setRouteOptions);

    let usersOptions = {page:1};  
    this.props.getUsers(usersOptions);    
  }

  render() { 
    return (
      <Router>        
        <div>
          <HeaderModule />
          <div className={"container"}>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </div>
          {
            /*  DO NOT USE SWITCH WHEN USING TRANSITION GROUP - SWITCH AUTOMATICALLY ROUTES WHEN MATCH          
            <Switch>
              <Route path="/" exact component={HomeView} />
              <Route path="/login/" exact component={LoginView} /> 
              <Route path="/signup/" exact component={SignUpView} />
              <Route path="/account/" exact component={AccountView} />            
              <Route path="/about/" exact component={AboutView} />
              <Route path="/contact/" exact component={ContactView} />
              <Route component={ErrorView} />   
            </Switch> 
            */
          }
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.route,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLocationRoute: (options) => { 
      ROUTE_ACTIONS(dispatch).getLocationRoute(options);   
    },
    setLocationRoute: (options) => { 
      ROUTE_ACTIONS(dispatch).setLocationRoute(options);   
    },
    getUsers: (options) => { 
      USERS_ACTIONS(dispatch).getUsers(options);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BaseApp);