//core
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

//css
import styles from './BaseApp.css';

//views
import HomeView from '../../components/views/HomeView';
import SignUpView from '../../components/views/SignUpView';
import LoginView from '../../components/views/LoginView';
import AccountView from '../../components/views/AccountView';
import AboutView from '../../components/views/AboutView';
import ContactView from '../../components/views/ContactView';
import ErrorView from '../../components/views/ErrorView';

//actions
import { ROUTE_ACTIONS } from '../../redux/actions/routeActions';
import { USERS_ACTIONS } from'../../redux/actions/usersActions';

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