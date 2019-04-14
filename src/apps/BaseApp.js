//core
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

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

// //store
// import { BaseAppStore } from '../stores/BaseAppStore';
// //actions
// import { GET_ROUTE_LOG_IN } from '../actions/routeActions';
// import { GET_USERS } from '../actions/usersActions';
// //Log the initial state
// BaseAppStore.dispatch((dispatch) => GET_ROUTE_LOG_IN(dispatch));
// BaseAppStore.dispatch((dispatch) => GET_USERS(dispatch));

@connect((store) => {
  return {
    data: store
  }
})
export default class BaseApp extends React.Component {
  render() {   
    console.log("RENDER",this.props.data); 
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