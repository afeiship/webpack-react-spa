import AppBase, { $api, $config, $store } from '#';
import { HashRouter as Router, Route } from 'react-router-dom';

import Login from './login';
import Admin from './admin';
import hotable from 'react-hmr-decorator';

import runtime from 'serviceworker-webpack-plugin/lib/runtime';

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

    if(process.env.NODE_ENV === 'production'){
      this.registerSw();
    }
  }

  registerSw() {
    if ('serviceWorker' in navigator) {
      runtime.register();
    }
  }

  render() {
    return (
      <Router ref={(root) => (this.root = root)}>
        <section className="route-wrapper">
          <Route exact path="/" component={Login} />
          <Route path="/modules" component={Admin} />
        </section>
      </Router>
    );
  }
}
