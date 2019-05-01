// core
import React from 'react';

// css
import './ListDropDownEdit.css';

export default class ListDropDownEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,   
      name: this.props.name || "dropdown",
      index: this.props.index || 1,
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

  openDropDown = (name) => {
    console.log(name);
    this.setState({ 
      //open: event.target.innerText 
      open:  name
    }, () => {
      document.addEventListener('click', this.closeDropDown);
    });
  }

  closeDropDown = () => {
    this.setState({
      open: null,
    }, () => {
      document.removeEventListener('click', this.closeDropDown);
    });
  }

  render() {
    let opts = {};
    if (this.props.required) {
        opts['required'] = 'required';
    }
    if (this.props.readonly) {
        opts['readonly'] = 'readonly';
    }
    if (this.props.disabled) {
        opts['disabled'] = 'disabled';
    }  
    return (
      <div className={"list-dropdown-edit-wrapper"}>           
        <div className={"list-dropdown-item " + ((this.state.name === this.state.open) ? " open" : "") } key={this.state.name+"-dropdown-"+this.props.index} onClick={() => this.openDropDown(this.state.name)}>
            <input 
                name={this.state.name} 
                id={this.state.id} 
                className={"input-dropdown"} 
                placeholder={this.state.placeholder} 
                data-name={this.state.name} 
                value={this.state.selectedValue} 
                {...opts}
            />
            { this.state.name === this.state.open ? this.openList(this.state.data,this.state.name) : null }
        </div>
      </div>
    );
  }
}