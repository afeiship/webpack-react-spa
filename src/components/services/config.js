export default class {
  static HASH = '__BUILD_HASH__';
  static ENV = require(`environments/__BUILD_ENV__`).default;
  static APIS = {
    request: ['/api/vi', 'json'],
    items: [
      {
        items: {
          upload: ['post', '/system/upload'],
          signin: ['post', '/auth/signin'],
          login: ['post', '/auth/admin/signin'],
          subscription_index: ['get', '/system/subscription'],
          subscription_create: ['post', '/system/subscription'],
          subscription_delete: ['delete', '/system/subscription/{id}'],
          subscription_update: ['delete', '/system/subscription/{id}'],

          user_index: ['get', '/account/userInfo'],
          user_show: ['get', '/auth/admin/user/{id}'],
          user_show_search: ['get', '/auth/admin/user'],
          user_create: ['post', '/auth/admin/user'],
          user_delete: ['delete', '/auth/admin/user/{id}'],
          user_update: ['post', '/auth/admin/user/{id}'],

          order_index: ['get', '/trades/orders/site/goods/search'],
          permissions_create: ['post', '/account/permissions'],
          query_permission: ['get', '/account/permissionPageable?permissionType=1'],
          download_permission: ['get', '/account/permissionPageable?permissionType=2'],

          query_permission_delete: ['delete', '/account/permission/{id}'],
          query_permission_create: ['post', '/account/permission'],
          query_permission_update: ['put', '/account/permission/{id}'],

          banner_index: ['get', '/system/banners'],
          banner_create: ['post', '/system/banner'],
          banner_delete: ['delete', '/system/banner/{id}'],
          banner_update: ['put', '/system/banner/{id}']
        }
      }
    ]
  };
}
