// core
import React from 'react';

// css
import './BarLoader.css';

export default class BarLoader extends React.Component {
  render() {    
    return (      
      <div className={this.props.done + " page loader"} />
    );
  }
}