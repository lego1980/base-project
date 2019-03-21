//core
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { OverlayGridCheckBox, OverlayRowsGrid, OverlayColumnsGrid } from '../components/OverlayGridComponent';

//css
import styles from './Grid2App.css';

export default class Grid2App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <OverlayGridCheckBox /> TOGGLE GRID ROWS AND COLUMNS 
          <div className={"MainGrid"}>
            <OverlayColumnsGrid />
            <OverlayRowsGrid />
            <header role="header">
              <div className={"item"}>
                header
              </div>
            </header>
            <main role="main">
              <div className={"item"}>
                main
              </div>
            </main>
            <nav role="nav">
              <div className={"item"}>
                nav
              </div>
            </nav>
            <aside role="aside">
              <div className={"item"}>
                aside
              </div>
            </aside>
            <section role="section">
              <div className={"item"}>
                section
              </div>
            </section>
            <footer role="footer">
              <div className={"item"}>
                footer
              </div>
            </footer>          
          </div>
        </div>
      </BrowserRouter>
    );
  }
}