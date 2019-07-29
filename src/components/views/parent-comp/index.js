import React from 'react';
import cx from 'classnames';
import TestCmp from '#/views/test-comp';
export default class extends React.Component {
  componentWillMount() {
    console.log('parent will mount!');
  }

  componentDidMount() {
    console.log('parent did mount');
  }
  render() {
    console.log('parent renderer');
    const { className, ...props } = this.props;
    return (
      <div className={cx('parent-cmp', className)}>
        <TestCmp>xxx</TestCmp>
        <h1>Parent Component</h1>
      </div>
    );
  }
}
