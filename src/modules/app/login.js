import { Card, Form, Icon, Input, Button, message } from 'antd';
import AppBase, { $api, $form, $route } from '#';
import ReactFullImage from 'react-full-image';
import bgImg from '@/assets/images/bg.jpg';

@mixin(['on-change', 'form'])
export default class extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
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
  }

  _onSubmit = (e) => {
    e.preventDefault();
    message.info('to dashboard.');
  };

  render() {
    const [formLayout, _] = $form.formLayout([6, 18]);
    const { fields } = this.state;
    return (
      <div className="login-wrapper">
        <ReactFullImage src={bgImg} />
        <Card title="Admin Panel" className="shadow-5 login-view">
          <Form layout="vertical" onSubmit={this._onSubmit}>
            {this.generateForm(fields, formLayout)}
            <Button
              htmlType={'summit'}
              size="large"
              type="primary"
              className="wp-10"
              htmlType="submit">
              登录_FEI
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
