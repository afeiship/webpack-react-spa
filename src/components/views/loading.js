import React, { Component } from 'react';
import classNames from 'classnames';

export default class extends Component {
  render() {
    const { isLoading, error } = this.props;
    console.log(this.props);
    if (isLoading) {
      return <div className="f20 webkit-sassui-transform-center-xy">Loading...</div>;
    } else if (error) {
      return <div>Sorry, there was a problem loading the page.</div>;
    } else {
      return null;
    }
  }
}
