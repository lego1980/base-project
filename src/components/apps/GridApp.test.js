import React from 'react';
import ReactDOM from 'react-dom';
import GridApp from './GridApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
