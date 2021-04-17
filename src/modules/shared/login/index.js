import bgImg from '@/assets/images/bg.jpg';
import ReactFullImage from '@jswork/react-full-image';
import { Button, Form } from 'antd';
import FormBuilder from 'antd-form-builder';
import React, { Component } from 'react';
import './style.scss';

const meta = {
  fields: [
    { key: 'username', label: 'User Name' },
    { key: 'password', label: 'Password', widget: 'password' },
  ],
};

@mixin(['on-change'])
export default class extends Component {
  callApi() {
    nx.$api.profile().then((res) => {
      console.log(res);
      nx.$local = {
        'shared.profile': res,
      };
    });
  }

  componentDidMount() {
    this.callApi();
  }

  handleFinish = () => {
    nx.$route.to('orders/index');
  };

  render() {
    return (
      <div className="h100 rel">
        <ReactFullImage src={bgImg} />
        <div className="p-20 bg-f shadow-5 abs wsui-transform-center-xy login-view">
          <nx.$rc.layout value="la" className="mb-10">
            <div className="bg-e p-10">left</div>
            <div className="bg-8 p-10">right</div>
          </nx.$rc.layout>
          <Form onFinish={this.handleFinish}>
            <FormBuilder meta={meta} />
            <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
