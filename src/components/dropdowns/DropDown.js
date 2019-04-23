// core
import React from 'react';
import { Link } from 'react-router-dom';

// css
import './DropDown.css';

export default class DropDown extends React.Component {

  constructor() {
    super();
    this.state = {
      arrayList: ['Matt', 'Maxx', 'Newton'],
      arrayList: ['Dropdown'],
      open: null
    };
  }

  getInitialState = () => {
      return {
          hover: false
      };
  }

  onMouseEnterHandler = (event) => {
      this.setState({
        open: event.target.innerText,
      });
      console.log('enter');
  }

  onMouseLeaveHandler = (event) => {
      this.setState({
        open: null,
      });
      console.log('leave');
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
    console.log(event.target.innerText);
    this.setState({
      open: event.target.innerText,
    });
  }

  render() {
    return (
      <div className={"dropdown-wrapper"}>
        {
          this.state.arrayList.map((name, index) => {
            return (
              <div className={"dropdown-item"} key={`${name}-${index}`}>
                <span className={"dropdown-name"} onMouseLeave={this.onMouseLeaveHandler} onMouseEnter={ this.openDropDown } onClick={ this.openDropDown }>
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