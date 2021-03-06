// core
import React from 'react';
import ReactDOM from 'react-dom';

// redux and router redux
import { Provider } from 'react-redux';

// app
import BaseApp from './components/apps/base/BaseApp';

// store
import { BaseAppStore } from './redux/stores/base/BaseAppStore';

// service worker
import * as serviceWorker from './serviceWorker';

const app = document.getElementById('root');

ReactDOM.render(
    <Provider store={BaseAppStore}>
        <BaseApp />
    </Provider>, 
    app
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
