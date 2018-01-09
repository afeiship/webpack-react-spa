import AppBase, {$api, $store} from 'components/scripts/index';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import Login from './login';
import Admin from './admin';

export default class extends AppBase {

  static initialState() {
    const {login} = $store.local;
    return {
      local: {
        login: login || null
      },
      memory: {
        modalUser: false,
        modalUserQuery: false
      }
    }
  }

  componentDidMount() {
    const { root } = this.refs;
    AppBase.$.memory = {
      history: root.history
    };
  }

  render() {
    return (
      <Router ref="root">
        <section className="route-wrapper">
          <Route exact path="/" component={Login}/>
          <Route path="/admin" component={Admin}/>
        </section>
      </Router>
    );
  }
}
