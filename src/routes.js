import $loadable from '@/services/loadable';

export default [
  {
    path: '/',
    exact: true,
    component: $loadable.load(() => import('@/modules/shared/login'))
  },
  {
    path: '/admin',
    component: require('./modules/layout/index').default
  }
];

export const staticRoutes = [
  {
    path: '/admin/news/index', component: require('@/modules/news').default,
    path: '/admin/orders/index', component: require('@/modules/orders').default
  }
];
