import { $loadable } from '#';

export default [
  {
    path: '/',
    exact: true,
    component: $loadable.load(() => import('./modules/app/login'))
  },
  {
    path: '/admin',
    component: $loadable.load(() => import('./modules/app/admin'))
  }
];
