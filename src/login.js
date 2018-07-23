import {Card, Form, Icon, Input, Button} from 'antd';
import AppBase, {$api, $app, $route} from '#';
import ReactFullImage from 'react-full-image';
import bgImg from 'images/bg.jpg';


@mixin(['on-change', 'form'])
export default class extends React.Component {

  state = {
    formData: {},
    fields: [
      {
        label: '用户名',
        field: 'username',
        required: true,
        props: {
          placeholder: '登录用户名'
        }
      },
      {
        label: '密码',
        field: 'password',
        required: true,
        props: {
          placeholder: '登录密码'
        }
      }
    ]
  };

  _onSubmit = (e) => {
    e.preventDefault();
    console.log(this.formData);
  };

  render() {
    const [formLayout, _] = $app.formLayout([6, 18]);
    const {fields} = this.state;
    return (
      <div className="login-wrapper">
        <ReactFullImage src={bgImg}/>
        <Card title="CS.WORK Admin Panel" className="shadow-5 login-view">
          <Form layout="vertical" onSubmit={this._onSubmit}>
            {this.generateForm(fields, formLayout)}
            <Button size="large" type="primary" className="wp-10" htmlType="submit">登录</Button>
          </Form>
        </Card>
      </div>
    );
  }

};