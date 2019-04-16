// core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// css
import './HeaderModule.css';
import '../../styles/keyframes/fadeIn.css';
import '../../styles/keyframes/fadeOut.css';
import '../../styles/keyframes/slideY.css';
import '../../styles/keyframes/slideX.css';
import '../../styles/keyframes/slideRightOut.css';

class HeaderModule extends Component {
  render() {    
    return (
      <div className={"header-module"}>
        <div className={"header-logo"}>
          <Link to="/">HeaderLogo</Link>
        </div>   
        <ul className={"header-links header-dropdown"}>
          <li><Link to="/">Dropdown</Link></li>
        </ul>       
        <ul className={"header-links header-inline"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup/">Sign Up</Link></li>
          <li><Link to="/login/">Login</Link></li>
        </ul>        
      </div>
    );
  }
}
export default HeaderModule;