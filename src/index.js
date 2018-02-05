import 'components/styles/index.scss';
import 'styles/index';
import {ReduxBoot} from 'next-react-redux';
import App from './app';

const render = (inApp) =>{
  ReduxBoot.run(inApp, 'root');
};

render(App);

if (module.hot){
  module.hot.accept('./app', () => {
    const nextApp = require('./app').default;
    render(nextApp);
  });
}
