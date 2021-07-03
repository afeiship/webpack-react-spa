import { ReduxAppBase, reduxRender } from '@jswork/next-react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { renderRoutes } from 'react-router-config';
import ServiceReactRoute from '@jswork/service-react-route';
import { HashRouter as Router, Switch } from 'react-router-dom';
import '@/assets/styles/index.scss';
import './global';
import routes from './routes';
import NxActiveState from '@jswork/next-active-state';

const instance = new NxActiveState({});

nx.$state = instance.state;
instance.one('change', () => {
  console.log('forceupdate.');
  setTimeout(() => {
    window.ss.forceUpdate();
  }, 0);
});

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
    const $route = ServiceReactRoute.getInstance({ context: this.root, module: 'admin' });
    nx.sets({ $route });
  }

  componentDidMount() {
    const { history } = this.root;
    nx.$memory = { history };
    this.initAppService();
    window.ss = this;
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
