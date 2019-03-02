import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './HomeView.css';

class HomeView extends Component {
  render() {
    return (
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="Home-link"
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
