import React from 'react';
import ReactDOM from 'react-dom';
import BaseApp from './BaseApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BaseApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
