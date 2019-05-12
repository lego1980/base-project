// core
import React from 'react';

// css
import stylesViews from '../../../styles/global/globalView.module.scss';
import './ErrorView.css';

export default class ErrorView extends React.Component {
  render() {
    return (
        <div className={stylesViews['page'] + " " + stylesViews['view']}>
          ERROR VIEW
        </div>
    );
  }
}