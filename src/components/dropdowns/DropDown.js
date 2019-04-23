// core
import React from 'react';
import { Link } from 'react-router-dom';

// css
import './DropDown.css';

export default class DropDown extends React.Component {

  constructor() {
    super();
    this.state = {
      arrayList: ['Dropdown'],
      open: null
    };
  }

  openList = () => {
    return (
      <ul className={"dropdown-list"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup/">Sign Up</Link></li>
        <li><Link to="/login/">Login</Link></li>
        <li><Link to="/account/">Account</Link></li>
      </ul>
    );
  }

  openDropDown = (event) => {
    this.setState({ 
      open: event.target.innerText 
    }, () => {
      document.addEventListener('click', this.closeDropDown);
    });
  }

  closeDropDown = (event) => {
    this.setState({
      open: null,
    }, () => {
      document.removeEventListener('click', this.closeDropDown);
    });
  }

  render() {
    return (
      <div className={"dropdown-wrapper"}>
        {
          this.state.arrayList.map((name, index) => {
            return (
              <div className={"dropdown-item"} key={`${name}-${index}`}>
                <span className={"dropdown-name"} onClick={(event) => this.openDropDown(event) }>
                  { name }
                </span>
                  { name === this.state.open ? this.openList() : null }
              </div>
            );
          })
        }
      </div>
    );
  }
}