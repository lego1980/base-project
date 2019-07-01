// core
import React from 'react';

// css
import stylesView from '../../../styles/global/globalView.module.scss';
import './AboutView.css';

export default class AboutView extends React.Component {
  render() {
    
    return (
      <div className={"page about-view " + stylesView['view']}>
        ABOUT VIEW
      </div>
    );
  }
}