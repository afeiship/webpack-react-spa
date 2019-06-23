import { ReduxAppBase } from 'next-react-redux';
import { $api, $config, $store } from '#';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import hotable from 'react-hmr-decorator';
import routes from './routes';
import NxOfflineSw from 'next-offline-sw';
import { Fragment } from 'react';
import SwUpdateTips from '#/views/sw-update-tips';

@hotable(module)
export default class extends ReduxAppBase {
  static initialState(inStore) {
    const { login } = inStore.local;
    return {
      local: {
        login: login || null
      },
      session: {
        testSs: 'fei'
      },
      memory: {
        hasUpdate: false,
        modalUser: false,
        modalUserQuery: false,
        orders: {},
        users: {},
        login: {
          username: 'afei',
          password: '123123'
        }
      }
    };
  }

  componentDidMount() {
    NxOfflineSw.install({
      onUpdateReady: function() {
        nx.$memory = { hasUpdate: true };
        console.log('SW Event:', 'onUpdateReady');
      }
    });
    nx.$memory = {
      history: this.root.history
    };
  }

  eventBus(inName, inData) {
    console.log('*, I am - global event bus center:->', inName, inData);
  }

  render() {
    return (
      <Fragment>
        <Router ref={(root) => (this.root = root)}>
          <Switch>{renderRoutes(routes)}</Switch>
        </Router>
        <SwUpdateTips />
      </Fragment>
    );
  }
}
