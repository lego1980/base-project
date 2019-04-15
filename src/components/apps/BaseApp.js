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