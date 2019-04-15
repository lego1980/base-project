//core
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

//css
import styles from './BaseApp.css';

//views
import HomeView from '../../views/home/HomeView';
import SignUpView from '../../views/signup/SignUpView';
import LoginView from '../../views/login/LoginView';
import AccountView from '../../views/account/AccountView';
import AboutView from '../../views/about/AboutView';
import ContactView from '../../views/contact/ContactView';
import ErrorView from '../../views/error/ErrorView';

//actions
import { ROUTE_ACTIONS } from '../../../redux/actions/route/RouteActions';
import { USERS_ACTIONS } from'../../../redux/actions/users/UsersActions';

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
      <BrowserRouter>
        <div>
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