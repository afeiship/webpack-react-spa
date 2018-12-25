import React, { Component } from 'react';
import classNames from 'classnames';

export default class extends Component {
  render() {
    return <section className="test-comp">{this.props.children}</section>;
  }
}
