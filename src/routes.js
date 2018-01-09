import Root from './pages/root';
import Home from './pages/home';
import Test from './pages/test';
import Login from './pages/login';


export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/test/',
        component: Test
      },
      {
        path: '/login/',
        component: Login
      }
    ]
  }
];