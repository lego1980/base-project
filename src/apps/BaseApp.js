//core
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

// import axios
import axios from "axios";

//css
import styles from './BaseApp.css';

//core components
import NavbarComponent from '../components/NavbarComponent';

//views
import HomeView from '../views/HomeView';
import SignUpView from '../views/SignUpView';
import LoginView from '../views/LoginView';
import AccountView from '../views/AccountView';
import AboutView from '../views/AboutView';
import ContactView from '../views/ContactView';
import ErrorView from '../views/ErrorView';

//actions
import { ROUTE_ACTIONS } from '../actions/routeActions';
import { USERS_ACTIONS } from'../actions/usersActions';


// //Log the initial state
// BaseAppStore.dispatch((dispatch) => GET_ROUTE_LOG_IN(dispatch));
// BaseAppStore.dispatch((dispatch) => GET_USERS(dispatch));

export class BaseApp extends React.Component {
  componentWillMount() {
    //console.log("RENDER route",this.props.route);
    //console.log("RENDER users",this.props.users);
    
    let routeOptions = {type:"ROUTE_SIGN_UP",route:"/signup/"};  
    this.props.setLocationRoute(routeOptions);

    let usersOptions = {page:2};  
    this.props.getUsers(usersOptions);    
  }

  render() { 
    return (
      <BrowserRouter>
        <div>
          <NavbarComponent />
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/login/" exact component={LoginView} /> 
            <Route path="/signup/" exact component={SignUpView} />
            <Route path="/account/" exact component={AccountView} />            
            <Route path="/about/" exact component={AboutView} />
            <Route path="/contact/" exact component={ContactView} />
            <Route component={ErrorView} />   
          </Switch>
        </div>
      </BrowserRouter>
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
    setLocationRoute: (options) => { 
      ROUTE_ACTIONS(dispatch).setLocationRoute(options);
      //dispatch({type: ROUTE_LOG_IN})      
    },
    getUsers: (options) => { 
      USERS_ACTIONS(dispatch).getUsers(options);
      // dispatch({type: USERS_PENDING });
      // axios.get("https://reqres.in/api/users?page=2").then((response) => {
      //     dispatch({type: USERS_FULFILLED, payload: response.data });
      // }).catch((err) => {
      //     dispatch({type: USERS_REJECTED, payload: err });
      // });
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BaseApp);