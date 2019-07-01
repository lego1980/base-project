// core
import React from 'react';

// css
import './BarsLoader.scss';

export default class BarsLoader extends React.Component {
  render() {    
    return (      
      <div className={this.props.done + " bars-loader"} />
    );
  }
}