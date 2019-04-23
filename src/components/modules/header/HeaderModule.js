// core
import React from 'react';
import { Link } from 'react-router-dom';

// components
import DropDown from '../../dropdowns/DropDown';

// css
import './HeaderModule.css';
import '../../styles/keyframes/fadeIn.css';
import '../../styles/keyframes/fadeOut.css';
import '../../styles/keyframes/slideY.css';
import '../../styles/keyframes/slideX.css';
import '../../styles/keyframes/slideRightOut.css';

export default class HeaderModule extends React.Component {
  render() {    
    return (
      <div className={"header-module"}>
        <div className={"header-logo"}>
          <Link to="/">HeaderLogo</Link>
        </div>   
        <div className={"header-links header-dropdown"}>
          <DropDown />
        </div>       
        <ul className={"header-links header-inline"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup/">Sign Up</Link></li>
          <li><Link to="/login/">Login</Link></li>
          <li><Link to="/account/">Account</Link></li>
        </ul>        
      </div>
    );
  }
}