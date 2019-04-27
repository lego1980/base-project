// core
import React from 'react';
import { Link } from 'react-router-dom';

// components
import DropDown from '../../dropdowns/DropDown';

// images
import logo from '../../../images/logo.svg';

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
      <header className={"header-module"}>
        <div className={"header-logo"}>
          <Link to="/"><img src={logo} className="base-logo" alt="logo" /></Link>
        </div>   
        <div className={"header-links header-dropdown"}>
          <DropDown />
        </div> 
        <nav>      
          <ul className={"header-links header-inline"}>
            <li><Link to="/" className="icon icon-home">HOME</Link></li>
            <li><Link to="/register/" className="icon icon-pen">REGISTER</Link></li>
            <li><Link to="/login/" className="icon icon-signin">LOG IN</Link></li>
            {/* <li><Link to="/account/" className="icon icon-settings">Account</Link></li> */}
          </ul> 
        </nav>       
      </header>
    );
  }
}