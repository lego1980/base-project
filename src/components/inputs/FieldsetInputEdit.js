// core
import React from 'react';

// css
import './FieldsetInputEdit.css';

export default class FieldsetInputEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false,      
      legend : this.props.legend || null,
      classes : this.props.classes || "",      
      inputType: this.props.inputType || "text",
      inputId: this.props.inputId || null,
      inputName: this.props.inputName || null,      
      inputValue: this.props.inputValue || "",      
      inputPlaceholder : this.props.inputPlaceholder || "select an item"
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
      <fieldset className={this.state.classes + ((this.state.edit === true) ? " edit" : "")}>
        { 
          this.state.legend !== null
          ?
            <legend>{this.state.legend}</legend>
          :
            null
        }
        <input 
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
      </fieldset>
    );
  }
}