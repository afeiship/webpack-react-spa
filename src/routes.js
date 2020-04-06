import $loadable from '@/services/loadable';

export default [
  {
    path: '/',
    exact: true,
    component: $loadable.load(() => import('./modules/shared/login'))
  },
  {
    path: '/admin/orders/index',
    component: $loadable.load(() => import('./modules/orders/index'))
  }
];
