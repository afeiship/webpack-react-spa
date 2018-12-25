import { $config, $route } from '#';

export default class {
  static formLayout(inArray) {
    return [
      {
        labelCol: {
          span: inArray[0]
        },
        wrapperCol: {
          span: inArray[1]
        }
      },
      {
        wrapperCol: {
          offset: inArray[0],
          span: inArray[1]
        }
      }
    ];
  }
}
