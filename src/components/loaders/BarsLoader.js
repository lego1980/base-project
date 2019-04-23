// core
import React from 'react';

// css
import './BarsLoader.css';

export default class BarsLoader extends React.Component {
  render() {    
    return (      
      <div className={this.props.done + " page bars-loader"} />
    );
  }
}