import bgImg from '@/assets/images/bg.jpg';
import ReactFullImage from '@jswork/react-full-image';
import { Button, Form } from 'antd';
import FormBuilder from 'antd-form-builder';
import React, { Component } from 'react';

const Container = styled.div`
  width: 400px;
  top: 37.5%;
`;

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
        <Container className="p-20 bg-f shadow-5 abs wsui-transform-center-xy">
          <View plugin="flexbox:la" p_={10} mb={20} debug>
            <div className="bg-e">left</div>
            <div className="bg-8">right</div>
          </View>
          <Form onFinish={this.handleFinish}>
            <FormBuilder meta={meta} />
            <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Container>
      </div>
    );
  }
}
