import ReactFullImage from '@feizheng/react-full-image';
import bgImg from '@/assets/images/bg.jpg';
import React, { Component } from 'react';
import ApiServie from '@/services/api';
import { Form, Input, Button, Checkbox } from 'antd';
import './style.scss';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

@service(['route', 'api'])
@mixin(['on-change', 'bomb-demo'])
export default class extends Component {
  callApi() {
    // ApiServie.profile()
    this.$api.profile().then(res => {
      nx.$local = {
        'shared.profile': res
      }
    })
  }

  componentDidMount() {
    this.callApi()
  }

  onFinish = (event) => {
      this.$route.push(`/admin/orders/index`);
  };

  render() {
    return (
      <div className="h100 rel">
        <ReactFullImage src={bgImg} />
        <div className="p20 bg-f shadow-5 abs webkit-sassui-transform-center-xy login-view">
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
        </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
