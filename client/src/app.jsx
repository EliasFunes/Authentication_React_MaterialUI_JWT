import React from 'react';
import ReactDom from 'react-dom';

const render = ReactDom.render;

render(<h1>Hello from React</h1>, document.getElementById('react-app'));