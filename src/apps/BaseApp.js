import React, { Component } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import HomeView from '../views/HomeView';
import styles from './BaseApp.css';

class BaseApp extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <HomeView />
      </div>
    );
  }
}

export default BaseApp;
