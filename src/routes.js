import Loadable from 'react-loadable';

// https://juejin.im/post/5a582956518825734216d282
const LoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div className="f20 webkit-sassui-transform-center-xy">Loading...</div>;
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

export default [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('./login'),
      loading: LoadingComponent
    })
  },
  {
    path: '/admin',
    component: Loadable({
      loader: () => import('./admin'),
      loading: LoadingComponent
    })
  }
];
