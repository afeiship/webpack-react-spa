import 'assets/styles/index.scss';
import {ReduxBoot} from 'next-react-redux';
import App from './app';

const render = () => {
  return ReduxBoot.run(App, 'root', {
    prefix: 'react-spa'
  });
};

render() && module.hot && module.hot.accept('./app', render);
