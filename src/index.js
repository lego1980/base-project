import React from 'react';
import ReactDOM from 'react-dom';
import BaseApp from './apps/BaseApp';
import Grid3App from './apps/Grid3App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Grid3App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
