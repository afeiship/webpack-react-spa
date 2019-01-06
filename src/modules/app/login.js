import { Card, Form, Icon, Input, Button, message } from 'antd';
import { $api, $form, $route, TestComp } from '#';
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
    console.log(this.state.formData);
    nx.$app.emit('app:login', { auth: true });
  };

  _onClick1 = () => {
    nx.$memory = {
      'users.test1.test0.item1': Math.random()
    };
  };

  _onClick2 = () => {
    nx.$local = {
      'users.test2': Math.random()
    };
  };

  componentDidMount() {
    nx.$app.on('test-comp:test', (inData) => {
      console.log('show me you data:', inData);
    });
  }

  render() {
    const [formLayout, _] = $form.formLayout([6, 18]);
    const { fields } = this.state;
    return (
      <div className="login-wrapper">
        <TestComp />
        <ReactFullImage src={bgImg} />
        <TestComp />
        <Button onClick={this._onClick1}>Set by path(Memory)</Button>
        <Button onClick={this._onClick2}>Set by path(Local)</Button>
        <Card title="Admin Panel" className="shadow-5 login-view">
          <Form layout="vertical" onSubmit={this._onSubmit}>
            {this.generateForm(fields, formLayout)}
            <Button size="large" type="primary" className="wp-10" htmlType="submit">
              登录
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}
