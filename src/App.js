import React, { Component } from 'react';
import NavbarCompoment from './components/NavbarCompoment';
import HomeView from './views/HomeView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarCompoment />
        <HomeView />
      </div>
    );
  }
}

export default App;
