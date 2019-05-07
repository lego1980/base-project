// core
import React from 'react';

// css
import './BarsOverlayLoader.scss';

export default class BarsOverlayLoader extends React.Component {
  render() {    
    return ( 
      <div className={this.props.done + "overlay-wrapper"}>   
        <div className={this.props.done + " bars-loader"} />
      </div>
    );
  }
}