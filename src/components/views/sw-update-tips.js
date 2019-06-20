import React, { Component } from 'react';
import classNames from 'classnames';
import NxOfflineSw from 'next-offline-sw';

export default class extends Component {
  _onClick = (e) => {
    NxOfflineSw.update();
  };

  render() {
    const { className, children, ...props } = this.props;
    const { hasUpdate } = nx.$memory;
    return (
      hasUpdate && (
        <section {...props} className={classNames('tr w100 fixed sw-update-tips', className)}>
          <a className="c-f" href="javascript:;" onClick={this._onClick}>
            有更新啦！请点击更新
          </a>
        </section>
      )
    );
  }
}
