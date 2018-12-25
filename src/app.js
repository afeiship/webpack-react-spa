import AppBase, { $api, $config, $store } from '#';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import hotable from 'react-hmr-decorator';
import routes from './routes';

/**
 *
 * new idea:
 * @reduxBoot('root',{ prefix: 'spa-project '})
 */
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

  render() {
    return (
      <Router ref={(root) => (this.root = root)}>
        <Switch>{renderRoutes(routes)}</Switch>
      </Router>
    );
  }
}
