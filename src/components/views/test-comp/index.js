import React, { Component } from 'react';
import Button from 'antd/es/button/button';
import './index.scss';
import AppBase from '#';

export default class extends Component {
  _click1 = (_) => {
    AppBase.emit('test-comp:test', {
      data1: 1234322
    });
  };

  render() {
    const { children } = this.props;
    return (
      <section className="test-comp">
        <Button onClick={this._click1}>Test EventBus</Button>
        <span>test tex1t</span>
        {children}
      </section>
    );
  }
}
