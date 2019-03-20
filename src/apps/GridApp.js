//core
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { OverlayGridCheckBox, OverlayRowsGrid, OverlayColumnsGrid } from '../components/OverlayGrid';

//css
import styles from './GridApp.css';

export default class GridApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <OverlayGridCheckBox /> TOGGLE GRID ROWS AND COLUMNS 
          <div className={"MainGrid"}>
            <OverlayColumnsGrid />
            <OverlayRowsGrid />
            <header role="header">Hedaer</header>
            <main role="main">Main</main>
            <nav role="nav">Nav</nav>
            <aside role="aside">Aside</aside>
            <section role="section">section</section>
            <footer role="footer">Footer</footer>          
          </div>
        </div>
      </BrowserRouter>
    );
  }
}