import { Layout, Menu, Icon } from 'antd';
import { HashRouter as Router, Route } from 'react-router-dom';

import UserIndex from './modules/users/index';
import OrderIndex from './modules/orders/index';
const { Header, Content, Footer, Sider } = Layout;

export default class extends React.Component {
  constructor(props) {
    super(props);
    const { location } = props;
    this.state = {
      collapsed: false,
      activeRoute: location.pathname
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  _onMenuClick = (e) => {
    const { history } = this.props;
    this.setState({ activeRoute: e.key }, () => {
      history.push(e.key);
    });
  };

  render() {
    const { match } = this.props;
    return (
      <Layout className="main-view">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}>
          <div className="p10 logo mb30">
            <h1 className="c-f">tradewow</h1>
            <h3 className="c-e">后台管理</h3>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[this.state.activeRoute]}
            onClick={this._onMenuClick}>
            <Menu.Item key="/modules/users/index">
              <Icon type="user" />
              <span className="nav-text">用户管理</span>
            </Menu.Item>
            <Menu.Item key="/modules/orders/index">
              <Icon type="tag" />
              <span className="nav-text">订单管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="tr bg-f">
            <Icon type="user" />
            <span className="mr10">Hello Admin</span>
            <a href="#">Logout</a>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <Route path={`/modules/users/index`} component={UserIndex} />
            <Route path={`/modules/orders/index`} component={OrderIndex} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Admin @Power by Fei.</Footer>
        </Layout>
      </Layout>
    );
  }
}
