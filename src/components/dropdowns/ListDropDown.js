// core
import React from 'react';

// css
import stylesForms from '../../styles/global/globalForm.module.scss';
import './ListDropDown.css';

export default class ListDropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parent: this.props.parent || [],
      handler: this.props.handler,
      id: this.props.id,   
      name: this.props.name || "dropdown",
      index: this.props.index || 1,
      data: this.props.data || [],
      open: null,
      selectedValue : "",
      placeholder : this.props.placeholder || "select an item"
    };
  }

  setItem = (event,matchBool,inputName,inputValue) => {

    let element = document.getElementsByName(this.state.name)[0]; //get first one //document.getElementsByName(this.state.name) || document.getElementById(this.state.id) || null;
    let matchInputBool = matchBool || undefined;
    let matchInputName = inputName || undefined;
    let matchInputValue = inputValue || undefined;

    this.setState({
      selectedValue: event.target.getAttribute('data-name') 
    }, () => {
      document.addEventListener('click', this.closeDropDown);
      console.log("onChangeHandler",element);
      this.state.parent.onChangeHandler(element,matchInputBool,matchInputName,matchInputValue);
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
    this.setState({
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
      <div className={"list-dropdown-wrapper"}>           
        <div className={"list-dropdown-item " + ((this.state.name === this.state.open) ? " open" : "") } key={this.state.name+"-dropdown-"+this.props.index} onClick={() => this.openDropDown(this.state.name)}>
            <input 
                name={this.state.name} 
                id={this.state.id} 
                className={"input-dropdown " + ((!this.state.parent.state.error[this.state.id].valid) ? stylesForms["error"]  : "")}
                placeholder={this.state.placeholder} 
                data-name={this.state.name} 
                value={this.state.selectedValue} 
                {...opts}                
            />
            { this.state.name === this.state.open ? this.openList(this.state.data,this.state.name) : null }
        </div>
        {/* <label htmlFor={this.state.id} className={((this.state.parent.state.error[this.state.name].msg.length !== 0) ? stylesForms["show-label-dropdown"] : "")}>{this.state.parent.state.error[this.state.name].msg}</label>  */}
      </div>
    );
  }
}