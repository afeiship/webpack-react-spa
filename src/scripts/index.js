import React from 'react';
import ReactDom from 'react-dom';
import '../styles/index';
class IndexApp extends React.Component {
  render() {
    console.log('render');
    var spanList=[];
    var space=' ';
    for (var i = 0; i < 3; i++) {
      spanList.push(<span key={i}>Hello index view{i}~~~</span>);
      spanList.push(space);
    }
    return (
      <div className="test-justify">
        {spanList}
      </div>
    )
  }
}

ReactDom.render(
    <IndexApp />,
    document.getElementById('index-app')
);
