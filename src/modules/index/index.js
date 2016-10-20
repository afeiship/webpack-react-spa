import React from 'react';
import ReactDom from 'react-dom';

class IndexApp extends React.Component {
  render() {
    console.log('render');
    return (
      <div>Hello index view1</div>
    )
  }
}

ReactDom.render(
    <IndexApp />,
    document.getElementById('index-app')
);
