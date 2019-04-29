// core
import React from 'react';

// css
import './ListDropDown.css';

export default class ListDropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: [this.props.name] || ["dropdown"],
      data: this.props.data || [],
      open: null,
      selectedValue : "",
      placeholder : this.props.placeholder || "select an item"
    };
  }

  setItem = (event) => {
    this.setState({ 
      //open: event.target.innerText 
      selectedValue: event.target.getAttribute('data-name') 
    }, () => {
      document.addEventListener('click', this.closeDropDown);
    });
  }

  openList = (data,name) => {
    return (
      <ul className={"list-dropdown-list"}>
        {
          data.map((data, index) => {
            return (
              <li className={(this.state.selectedValue === data.value) ? "selected" : "" } key={name+"-list-"+index} onClick={(event) => this.setItem(event)} data-name={data.value}>{data.name}</li>
            );
          })
        }
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
      <div className={"list-dropdown-wrapper"}>
        {
          this.state.name.map((name, index) => {
            return (              
              <div className={"list-dropdown-item"} key={name+"-dropdown-"+index}>
                <input name="gender" className={"input-dropdown"} readOnly placeholder={this.state.placeholder} data-name={name} value={this.state.selectedValue} onClick={(event) => this.openDropDown(event)} />
                { name === this.state.open ? this.openList(this.state.data,name) : null }
              </div>
            );
          })
        }
      </div>
    );
  }
}