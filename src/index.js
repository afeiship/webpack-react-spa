import 'assets/styles/index.scss';
import {ReduxBoot} from 'next-react-redux';
import App from './app';

const render = (inApp) => {
  ReduxBoot.run(inApp, 'root', {
    prefix: 'react-spa'
  });
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const nextApp = require('./app').default;
    render(nextApp);
  });
}
