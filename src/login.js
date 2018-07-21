import {Card, Form, Icon, Input, Button} from 'antd';
import AppBase, {$api, $route} from '#';
import ReactFullImage from 'react-full-image';
import bgImg from 'images/bg.jpg';
const FormItem = Form.Item;


export default Form.create()(class extends React.Component {

  signin(inValue) {
    $api.login(inValue).then(login => {
      AppBase.$.local = {login};
      AppBase.notify('Success!');
      $route.push('/admin/users/index');
    }, (error) => {
      AppBase.notify('Not Admin', 'error');
    });
  }

  _onSubmit = (e) => {
    const {form} = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        $route.push('/admin/users/index');
        // this.signin(values);
      }
    });
  };

  render() {
    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <div className="login-wrapper">
        <ReactFullImage src={bgImg}/>
        <Card title="Admin login" className="login-view">
          <Form layout="vertical" onSubmit={this._onSubmit}>
            <FormItem
              validateStatus={usernameError ? 'error' : ''}
              help={usernameError || ''}>
              {
                getFieldDecorator('username', {
                  rules: [{required: true, message: 'Please input your username!'}],
                })(<Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>)
              }
            </FormItem>
            <FormItem
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}>
              {
                getFieldDecorator('password', {
                  rules: [{required: true, message: 'Please input your Password!'}],
                })(<Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="Password"/>)
              }
            </FormItem>
            <FormItem className="tr mt10">
              <Button
                size="large"
                type="primary"
                className="mr5"
                htmlType="submit"
              >
                登录
              </Button>
              <Button size="large">取消</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }

});