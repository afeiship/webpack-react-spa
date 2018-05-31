import React,{PureComponent} from 'react';
import classNames from 'classnames';

export default class extends PureComponent {
  render() {
    return (
      <section className="test-comp">
        {this.props.children}
      </section>
    )
  }
}
