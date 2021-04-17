import '@/assets/styles/index.scss';
import NxOfflineSw from '@jswork/next-offline-sw';
import { ReduxAppBase, reduxRender } from '@jswork/next-react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { renderRoutes } from 'react-router-config';
import ServiceReactRoute from '@jswork/service-react-route';
import { HashRouter as Router, Switch } from 'react-router-dom';
import './global';
import routes from './routes';

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
        orders: {},
        users: {},
        login: { username: 'afei', password: '123123' },
      },
    };
  }

  initAppService() {
    nx.set(nx, '$app', this);
    nx.set(nx, '$route', ServiceReactRoute.getInstance({ context: this.root, module: 'admin' }));
  }

  componentDidMount() {
    const { history } = this.root;
    this.initAppService();
    nx.$memory = { history };
  }

  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Router ref={(root) => (this.root = root)}>
          <Switch>{renderRoutes(routes)}</Switch>
        </Router>
      </ConfigProvider>
    );
  }
}
