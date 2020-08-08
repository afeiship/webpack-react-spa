const ENV = require(`environments/__BUILD_ENV__`).default;

export default class {
  static HASH = '__BUILD_HASH__';
  static APIS = {
    host: ENV.BASE_URL,
    request: ['', 'json'],
    items: [
      {
        items: {
          profile: ['get', '/users/afeiship'],
          upload: ['post', '/system/upload'],
          login: ['post', '/auth/admin/signin'],
          banner_index: ['get', '/system/banners'],
          banner_create: ['post', '/system/banner'],
          banner_delete: ['delete', '/system/banner/{id}'],
          banner_update: ['put', '/system/banner/{id}'],
        },
      },
    ],
  };
}
