import 'assets/styles/index.scss';
import {ReduxBoot} from 'next-react-redux';
import App from './app';

ReduxBoot.run(App, 'root', {
  prefix: 'react-spa'
});