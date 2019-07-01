// core
import React from 'react';

// css
import './BarLoader.scss';

export default class BarLoader extends React.Component {
  render() {    
    return (      
      <div className={this.props.done + " bar-loader"} />
    );
  }
}