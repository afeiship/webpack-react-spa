import bgImg from '@/assets/images/bg.jpg';
import ReactFullImage from '@feizheng/react-full-image';
import React, { Component } from 'react';
import Form from './form';
import './style.scss';

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

  onFinish = (event) => {
    this.$route.push(`/admin/orders/index`);
  };

  render() {
    return (
      <div className="h100 rel">
        <ReactFullImage src={bgImg} />
        <div className="p20 bg-f shadow-5 abs webkit-sassui-transform-center-xy login-view">
          <Form />
        </div>
      </div>
    );
  }
}
