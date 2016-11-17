import React from 'react';
import ReactDom from 'react-dom';
import RootView from './views/RootView';
import '../styles/index';

console.log(RootView);
//render(<Router/>, document.getElementById('app'));
ReactDom.render(
    <RootView />,
    document.getElementById('index-app')
);
