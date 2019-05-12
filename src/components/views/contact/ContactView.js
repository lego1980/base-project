// core
import React from 'react';

// css
import stylesViews from '../../../styles/global/globalView.module.scss';
import './ContactView.css';

export default class ContactView extends React.Component {
  render() {
    return (
      <div className={stylesViews['page'] + " " + stylesViews['view']}>
        CONTACT VIEW        
      </div>      
    );
  }
}