import $loadable from '@/services/loadable';

export default [
  {
    path: '/',
    exact: true,
    component: require('./modules/shared/login').default,
  },
  {
    path: '/admin',
    component: $loadable.load(() => import('@/modules/shared/admin')),
  },
];
