import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { staticRoutes } from '@/routes';
import { renderRoutes } from 'react-router-config';

import NewsIndex from '@/modules/news/index';
import OrdersIndex from '@/modules/orders/index';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


@service(['route'])
export default class extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleClick = event => {
    this.$route.push(event.key);
  };

  render() {
    const menus = [
      { key: '/admin/news/index', label: 'News', icon: <MailOutlined /> },
      { key: '/admin/orders/index', label: 'Orders', icon: <AppstoreOutlined /> },
    ];

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <h1 className="c-f">Admin</h1>
          <Menu theme="dark" onClick={this.handleClick}>
            {
              menus.map((item, index) => {
                if (item.children && item.children.length > 0) {
                  return (
                    <SubMenu key={index} title={item.label}>
                      {item.children.map(sub => {
                        return <Menu.Item key={sub.key}>{sub.label}</Menu.Item>
                      })}
                    </SubMenu>
                  )
                } else {
                  return (
                    <Menu.Item icon={item.icon} key={item.key}>{item.label}</Menu.Item>
                  )
                }
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Route path={`/admin/news/index`} component={NewsIndex} />
              <Route path={`/admin/orders/index`} component={OrdersIndex} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout >
    );
  }
}
