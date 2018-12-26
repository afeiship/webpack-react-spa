import 'assets/styles/index.scss';
import { ReduxBoot } from 'next-react-redux';
import Loadable from 'react-loadable';
import App from './app';

Loadable.preloadReady().then(() => {
  ReduxBoot.run(App, 'root', {
    prefix: 'react-spa'
  });
});
