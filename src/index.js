import React from 'react';
import ReactDOM from 'react-dom';
import BaseApp from './apps/BaseApp';
import GridApp from './apps/GridApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GridApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
