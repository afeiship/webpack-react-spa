import { ReduxAppBase } from 'next-react-redux';
import { $api, $config, $store } from '#';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import hotable from 'react-hmr-decorator';
import routes from './routes';

@hotable(module)
export default class extends ReduxAppBase {
  static initialState(inStore) {
    const { login } = inStore.local;
    return {
      local: {
        login: login || null
      },
      memory: {
        modalUser: false,
        modalUserQuery: false,
        orders: {}
      }
    };
  }

  componentDidMount() {
    nx.$memory = {
      history: this.root.history
    };
  }

  eventBus(inName, inData) {
    console.log('*, I asm - global event bus center:->', inName, inData);
  }

  render() {
    return (
      <Router ref={(root) => (this.root = root)}>
        <Switch>{renderRoutes(routes)}</Switch>
      </Router>
    );
  }
}
