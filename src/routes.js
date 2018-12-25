import { $loadable } from '#';

export default [
  {
    path: '/',
    exact: true,
    component: $loadable.load(() => import('./login'))
  },
  {
    path: '/admin',
    component: $loadable.load(() => import('./admin'))
  }
];
