import React from 'react';
import ReactDom from 'react-dom';
console.log('import success!');
export default class IndexApp extends React.Component {
  render() {
    console.log('render...');
    var spanList=[];
    var space=' ';
    for (var i = 0; i < 3; i++) {
      spanList.push(<span key={i}>Hello index view{i}~~~</span>);
      spanList.push(space);
    }

    console.log(spanList);
    return (
      <div className="test-justify">
        {spanList}
      </div>
    )
  }
}
