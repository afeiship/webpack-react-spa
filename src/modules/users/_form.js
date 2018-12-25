import AppBase, { $api, $store } from '#';
import { Form, Icon, Input, Button, Modal, Radio } from 'antd';
const FormItem = Form.Item;

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class extends React.Component {
  title = 'MODAL-TITLE';
  action = 'NONE';

  static defaultProps = {
    data: {}
  };

  _onSubmit = (e, b) => {
    e.preventDefault();
    const { onComplete } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.onSubmit(nx.mix(values, { username: values.phone })).then((resp) => {
          onComplete(resp);
        });
      }
    });
  };

  _onCancel = (inEvent) => {
    AppBase.command('modal.user', false);
  };

  componentDidMount() {
    const { params, data } = this.props;
    this.props.form.setFields(data);
  }

  render() {
    const { data } = this.props;
    const { getFieldDecorator, setFields } = this.props.form;
    const { modalUser } = AppBase.$.memory;

    return (
      <Modal footer={null} title={this.title} onCancel={this._onCancel} visible={modalUser}>
        <Form onSubmit={this._onSubmit} className="user-form">
          <FormItem>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone!' }]
            })(<Input placeholder="phone" />)}
          </FormItem>

          {this.action == 'add' && (
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }]
              })(<Input placeholder="password" />)}
            </FormItem>
          )}

          {this.action == 'edit' && (
            <FormItem>
              {getFieldDecorator('password', {})(<Input placeholder="password" />)}
            </FormItem>
          )}

          <FormItem>{getFieldDecorator('email')(<Input placeholder="email" />)}</FormItem>

          <FormItem>{getFieldDecorator('company')(<Input placeholder="company" />)}</FormItem>
          <FormItem>{getFieldDecorator('job')(<Input placeholder="job" />)}</FormItem>

          <FormItem>
            {getFieldDecorator('is_active', {
              valuePropName: 'value',
              initialValue: true
            })(
              <RadioGroup>
                <RadioButton value={true}>默认激活</RadioButton>
                <RadioButton value={false}>禁用此用户</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem>
            <Button htmlType="reset" className="mr10" onClick={this._onCancel}>
              取消
            </Button>
            <Button type="primary" htmlType="submit" onClick={this._onSubmit}>
              完成
            </Button>
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
