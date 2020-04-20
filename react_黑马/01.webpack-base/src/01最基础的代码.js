// console.log('ook');
// console.log('nook');
// console.log('book');

import React from 'react';
import ReactDOM from 'react-dom';

const myh1 = React.createElement(
  'h1',
  { id: 'myh1', title: 'this is a h1' },
  '这是一个h1节点',
);

ReactDOM.render(myh1, document.getElementById('app'));
