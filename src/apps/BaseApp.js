//core
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux'

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

//reducers
import { BaseAppStore } from '../reducers/BaseAppReducer'

//actions
import { getUsers, postUsers } from '../actions/usersActions'

const store = createStore(
  BaseAppStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Log the initial state
console.log('initial state', store.getState());
store.dispatch(getUsers());
console.log('get state', store.getState());

export default class BaseApp extends Component {
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