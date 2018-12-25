import Login from './login';
import Admin from './admin';

export default [
  {
    path: '/',
    exact: true,
    component: Login
  },
  {
    path: '/admin',
    component: Admin
  }
];
