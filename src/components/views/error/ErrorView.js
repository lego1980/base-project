// core
import React from 'react';

// css
import sytlesViews from '../../../styles/global/globalView.module.scss';
import './ErrorView.css';

export default class ErrorView extends React.Component {
  render() {
    return (
        <div className={sytlesViews['page'] + " " + sytlesViews['view']}>
          ERROR VIEW
        </div>
    );
  }
}