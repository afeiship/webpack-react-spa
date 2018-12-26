import AppBase, { $api, $config, $store } from '#';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import hotable from 'react-hmr-decorator';
import routes from './routes';
import { ReduxBoot } from 'next-react-redux';
import 'assets/styles/index.scss';

function appRender(inId, inOptions) {
  return function(inTarget) {
    ReduxBoot.run(inTarget, inId, inOptions);
  };
}
/*
[Warning:]
react-hot-loader.development.js:285 React-hot-loader: Detected AppContainer unmount on module './src/index.js' update.
Did you use "hot(AppBase.0.03292455545521844)" and "ReactDOM.render()" in the same file?
"hot(AppBase.0.03292455545521844)" shall only be used as export.
Please refer to "Getting Started" (https://github.com/gaearon/react-hot-loader/).

https://stackoverflow.com/questions/42351104/webpack-disable-hmr-for-single-file
*/

@appRender('root', { prefix: 'fei-test1' })
@hotable(module)
export default class extends AppBase {
  static initialState(inStore) {
    const { login } = inStore.local;
    return {
      local: {
        login: login || null
      },
      memory: {
        modalUser: false,
        modalUserQuery: false
      }
    };
  }

  componentDidMount() {
    AppBase.$.memory = {
      history: this.root.history
    };
  }

  eventBus(inName, inData) {
    console.log('*, I am - global event bus center:->', inName, inData);
  }

  render() {
    return (
      <Router ref={(root) => (this.root = root)}>
        <Switch>{renderRoutes(routes)}</Switch>
      </Router>
    );
  }
}
