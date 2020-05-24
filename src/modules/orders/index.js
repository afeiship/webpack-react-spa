import React from 'react';
import { Button, Input } from 'antd';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'orders'
    }
  }

  handleClick = () => {
    console.log('clik!');
    this.setState({
      value: Math.random()
    })
  }

  handleChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    const { value } = this.state;
    return <div>
      <h1>Hello {value}!</h1>
      <Input type="text" onChange={this.handleChange} />
      <Button type="primary" onClick={this.handleClick}>
        SHOW DATA
      </Button>
    </div>
  }
}
