import { $loadable } from '#';

export default [
  {
    path: '/',
    exact: true,
    component: $loadable.load(() => import('./modules/app/login'))
  },
  {
    path: '/admin/users/index',
    component: $loadable.load(() => import('./modules/users/index'))
  },
  {
    path: '/admin/orders/index',
    component: $loadable.load(() => import('./modules/orders/index'))
  }
];
