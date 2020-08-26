import '@/assets/styles/index.scss';
import NxOfflineSw from '@feizheng/next-offline-sw';
import { ReduxAppBase, reduxRender } from '@feizheng/next-react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { renderRoutes } from 'react-router-config';
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
      <ConfigProvider locale={zhCN}>
        <Router ref={(root) => (this.root = root)}>
          <Switch>{renderRoutes(routes)}</Switch>
        </Router>
      </ConfigProvider>
    );
  }
}
