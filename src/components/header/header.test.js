import React from 'react';
import ReactDOM from 'react-dom';
import header from './header';

it(' header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
