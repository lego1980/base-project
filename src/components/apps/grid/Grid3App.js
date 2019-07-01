//core
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { OverlayGridCheckBox, OverlayRowsGrid, OverlayColumnsGrid } from '../components/OverlayGridComponent';

//css
import styles from './Grid3App.css';

export default class Grid3App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <OverlayGridCheckBox /> TOGGLE GRID ROWS AND COLUMNS 
          <div className={"MainGrid"}>
            <OverlayColumnsGrid />
            <OverlayRowsGrid />
            <div className={"header"} role="header">
              <div className={"item"}>
                header
              </div>
            </div>
            <div className={"main"} role="main">
              <div className={"item"}>
                main
              </div>
            </div>
            <div className={"nav"} role="nav">
              <div className={"item"}>
                nav
              </div>
            </div>
            <div className={"aside"} role="aside">
              <div className={"item"}>
                aside
              </div>
            </div>
            <div className={"section"} role="section">
              <div className={"item"}>
                section
              </div>
            </div>
            <div className={"footer"} role="footer">
              <div className={"item"}>
                footer
              </div>
            </div>          
          </div>
        </div>
      </BrowserRouter>
    );
  }
}