// core
import React from 'react';

// css
import './InputEdit.css';

export default class InputEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      classes : this.props.classes || "",      
      inputType: this.props.inputType || "text",
      inputId: this.props.inputId || null,
      inputName: this.props.inputName || null,      
      inputValue: this.props.inputValue || "",      
      inputPlaceholder : this.props.inputPlaceholder || ""
    };
  }

  onChangeValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  onFocusValue = (evt) => {
    this.setState({
      edit : true
    });
  }
 
  onBlurValue = (evt) => {
    this.setState({
      edit : false
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
        <input
          className={"input-component " + this.state.classes + ((this.state.edit === true) ? " edit" : "")} 
          type = {this.state.inputType} 
          name = {this.state.inputName}
          id = {this.state.inputId}
          value = {this.state.inputValue}
          placeholder = {this.state.inputPlaceholder}
          onChange = {(e) => this.onChangeValue(e)}
          onFocus = {(e) => this.onFocusValue(e)}
          onBlur = {(e) => this.onBlurValue(e)}
          {...opts}
        />
    );
  }
}