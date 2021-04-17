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

@service(['route', 'api'])
@mixin(['on-change'])
export default class extends Component {
  callApi() {
    this.$api.profile().then((res) => {
      nx.$local = {
        'shared.profile': res,
      };
    });
  }

  componentDidMount() {
    this.callApi();
  }

  handleFinish = (event) => {
    this.$route.push(`/admin/orders/index`);
  };

  render() {
    return (
      <div className="h100 rel">
        <ReactFullImage src={bgImg} />
        <div className="p20 bg-f shadow-5 abs wsui-transform-center-xy login-view">
          <nx.$Layout value="la" className="mb10">
            <div className="bg-e p10">left</div>
            <div className="bg-8 p10">right</div>
          </nx.$Layout>
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
