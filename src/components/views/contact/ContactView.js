// core
import React from 'react';

// css
import sytlesViews from '../../../styles/global/globalView.module.scss';
import './ContactView.css';

export default class ContactView extends React.Component {
  render() {
    return (
      <div className={sytlesViews['page'] + " " + sytlesViews['view']}>
        CONTACT VIEW        
      </div>      
    );
  }
}