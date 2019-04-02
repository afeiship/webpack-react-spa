import UserIndex from '@/modules/users/index';
import OrderIndex from '@/modules/orders/index';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    const { location } = props;
    this.state = {
      collapsed: false,
      activeRoute: location.pathname
    };
  }

  _onMenuClick = (e) => {
    const { history } = this.props;
    this.setState({ activeRoute: e.key }, () => {
      history.push(e.key);
    });
  };

  render() {
    return (
      <div className="main-view">
        <div>
          <div className="p10 logo mb30">
            <h1 className="c-f">tradewow</h1>
            <h3 className="c-e">后台管理</h3>
          </div>

          <ul>
            onClick={this._onMenuClick}>
            <li key="/modules/users/index">
              <span className="nav-text">用户管理</span>
            </li>
            <li key="/modules/orders/index">
              <span className="nav-text">订单管理</span>
            </li>
          </ul>
        </div>
        <div>
          <header className="tr bg-f">
            <span className="mr10">Hello Admin</span>
            <a href="#">Logout</a>
          </header>
          <div style={{ margin: '24px 16px 0' }}>
            <Route path={`/modules/users/index`} component={UserIndex} />
            <Route path={`/modules/orders/index`} component={OrderIndex} />
          </div>
          <footer style={{ textAlign: 'center' }}>Admin @Power by Fei.</footer>
        </div>
      </div>
    );
  }
}
