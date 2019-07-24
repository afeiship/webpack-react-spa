import React, { Component } from 'react';
import './index.scss';

export default class extends Component {
  _click1 = (_) => {
    nx.$app.emit('test-comp:test', {
      data1: 1234322
    });
  };

  componentWillMount() {
    console.log('child will mount!');
  }

  componentDidMount() {
    console.log('child did mount');
  }
  render() {
    const { children } = this.props;
    return (
      <section className="test-comp">
        <button onClick={this._click1}>Test EventBus</button>
        <span>test tex1t</span>
        {children}
      </section>
    );
  }
}
