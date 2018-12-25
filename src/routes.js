import Login from './login';
import Admin from './admin';

export default [
  {
    routes: [
      {
        path: '/',
        exact: true,
        component: Login
      },
      {
        path: '/admin',
        component: Admin
      }
    ]
  }
];
