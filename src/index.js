import './global';
import { ReduxAppBase, reduxRender } from '@feizheng/next-react-redux';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import NxOfflineSw from '@feizheng/next-offline-sw';
import { Fragment } from 'react';

import '@/assets/styles/index.scss';

@reduxRender('root', { prefix: 'react-spa' })
export default class extends ReduxAppBase {
  static initialState(inStore) {
    const { login } = inStore.local;
    return {
      local: {
        login: login || null,
      },
      session: {
        collapsed: false,
      },
      memory: {
        hasUpdate: false,
        orders: {},
        users: {},
        login: { username: 'afei', password: '123123' },
      },
    };
  }

  componentDidMount() {
    const { history } = this.root;
    NxOfflineSw.install({
      onUpdateReady: function () {
        nx.$memory = { hasUpdate: true };
        // console.log('SW Event::', 'onUpdateReady');
      },
    });
    nx.$memory = { history };
  }

  render() {
    return (
      <Fragment>
        <Router ref={(root) => (this.root = root)}>
          <Switch>{renderRoutes(routes)}</Switch>
        </Router>
      </Fragment>
    );
  }
}
