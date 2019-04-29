// core
import React from 'react';
import { Link } from 'react-router-dom';

// css
import './DropDown.css';

export default class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayList: ['Dropdown'],
      open: null
    };
  }

  openList = () => {
    return (
      <ul className={"dropdown-list"}>
        <li><Link to="/" className="icon icon-home">HOME</Link></li>
        <li><Link to="/register/" className="icon icon-pen">REGISTER</Link></li>
        <li><Link to="/login/" className="icon icon-signin">LOG IN</Link></li>
        <li><Link to="/account/" className="icon icon-settings">ACCOUNT</Link></li>
      </ul>
    );
  }

  openDropDown = (event) => {
    this.setState({ 
      //open: event.target.innerText 
      open: event.target.getAttribute('data-name') 
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
                <span data-name={name} className={"dropdown-name icon icon-list"} onClick={(event) => this.openDropDown(event) }>
                  
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