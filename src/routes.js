import Loadable from 'react-loadable';
import { Loading } from '#';

export default [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('./login'),
      loading: Loading
    })
  },
  {
    path: '/admin',
    component: Loadable({
      loader: () => import('./admin'),
      loading: Loading
    })
  }
];
