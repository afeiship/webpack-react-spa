import { $loadable } from '#';

export default [
  {
    path: '/',
    exact: true,
    component: $loadable.load(() => import('./modules/app/login'))
  },
  {
    path: '/admin/orders/index',
    component: $loadable.load(() => import('./modules/orders/index'))
  }
];
