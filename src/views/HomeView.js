import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import styles from './HomeView.css';

class HomeView extends Component {
  render() {
    return (
        <header className={"HomeHeader"}>
          <img src={logo} className={"HomeLogo"} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={"HomeLink"}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    );
  }
}

export default HomeView;
