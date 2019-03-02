import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import styles from './HomeView.css';

class HomeView extends Component {
  render() {
    return (
      <div className={"HomeView"}>
        <header className={"HomeViewHeader"}>
          <img src={logo} className={"HomeViewLogo"} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={"HomeViewLink"}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default HomeView;
