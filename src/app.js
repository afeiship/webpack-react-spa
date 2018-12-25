import AppBase, { $api, $config, $store } from '#';
import { HashRouter as Router, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import hotable from 'react-hmr-decorator';
import routes from './routes';

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
    console.log(routes);

    return (
      <Router ref={(root) => (this.root = root)}>
        <section className="route-wrapper">{renderRoutes(routes)}</section>
      </Router>
    );
  }
}
