export default class {
  static HASH = '__BUILD_HASH__';
  static ENV = require(`environments/__BUILD_ENV__`).default;
  static APIS = {
    host:'http://localhost:3000',
    request: ['/api/vi', 'json'],
    items: [
      {
        items: {
          upload: ['post', '/system/upload'],
          login: ['post', '/auth/admin/signin'],
          banner_index: ['get', '/system/banners'],
          banner_create: ['post', '/system/banner'],
          banner_delete: ['delete', '/system/banner/{id}'],
          banner_update: ['put', '/system/banner/{id}']
        }
      }
    ]
  };
}
