import React from 'react';
import ReactDom from 'react-dom';
export default class HomeApp extends React.Component {
  render() {
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
