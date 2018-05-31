import UserForm from './_form';
import {Form, Icon, Input, Button, Modal} from 'antd';
import AppBase, {$api, $store} from 'components';

export default Form.create()(
  class extends UserForm {
    title = '添加新用户';
    action = 'add';

    onSubmit(inValue) {
      return new Promise((resolve, reject) => {
        $api.user_create(inValue).then(resp => {
          AppBase.command('modal.user', false);
          resolve(resp);
        });
      });
    }
  }
);