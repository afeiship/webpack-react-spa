import React, { Component } from 'react';
import styles from './style.module.scss';

console.log('css in js:', styles);

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
      <section className={styles.main}>
        <h5 className={styles.title}>Title</h5>
        <button onClick={this._click1}>Test EventBus</button>
        <span>test tex1t</span>
        <button
          onClick={() => {
            nx.$memory = {
              current: 123123
            };
          }}>
          Test BUtton
        </button>
        {children}
      </section>
    );
  }
}
