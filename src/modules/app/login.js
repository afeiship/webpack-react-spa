import ReactFullImage from '@feizheng/react-full-image';
import bgImg from '@/assets/images/bg.jpg';
import React, { Component } from 'react';
import reactLogoSvg from 'images/react_logo.svg';

@service(['route'])
@mixin(['on-change', 'bomb-demo'])
export default class extends Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
      viewData1: 111,
      viewData2: 222,
      formData: {
        username: '',
        password: ''
      }
    };
  }

  _onSubmit = (e) => {
    e.preventDefault();
    // console.info('to users index.', this.state.formData);
    console.log('user @service to route', this.$route);
    nx.$app.emit('app:login', { auth: true });
    this.$route.push('/admin/orders/index', {
      par: 1
    });
  };

  _onClick1 = () => {
    nx.$memory = {
      'users.test1.test.item1': Math.random()
    };
    const { users } = nx.$memory;
    console.log('paths: users.test1.test.item1, value is:', users.test1.test.item1);
  };

  _onClick2 = () => {
    nx.$local = {
      'users.test2': Math.random()
    };
  };

  _onClick3 = () => {
    console.log('click3');
    // nx.testPrivate();
  };

  componentDidMount() {
    const { loading } = nx.$session;
    // console.log(loading);
    nx.$app.on('test-comp:test', (inData) => {
      console.log('show 1 me you data:', inData);
    });
  }

  _bombClick = (e) => {
    console.log('bomb', this);
    this.say();
    this.walk();
    this.jump();
    this.fly();
  };

  render() {
    const { formData } = this.state;
    const { login } = nx.$memory;

    return (
      <div className="login-wrapper">
        <ReactFullImage src={bgImg} />
        <button onClick={this._onClick1}>Set by path(Memory)</button>
        <button onClick={this._onClick2}>Set by path(Local)</button>
        <div className="p20 bg-f shadow-5 login-view">
          <button onClick={this._bombClick}>Test BombMethod</button>
          <p className="tc">
            <img className="wp-5" src={require('images/banner.png')} alt="" />
            <img className="wp-5" src={require('images/error_exception_mini.png')} />
            <img width="200" src={reactLogoSvg} />
          </p>
          <button
            onClick={() => {
              this.setState({
                viewData1: Math.random()
              });
            }}>
            Btn1-{this.state.viewData1}
          </button>

          <button
            onClick={() => {
              this.setState({
                viewData2: Math.random()
              });
            }}>
            Btn2
          </button>
          <form onSubmit={this._onSubmit}>
            <label className="db p10">
              <strong>用户名</strong>
              <input
                type="text"
                value={login.username}
                onChange={this.onChangeToState.bind(this, 'formData.username')}
              />
            </label>
            <label className="db p10">
              <strong>密码</strong>
              <input
                type="password"
                value={login.password}
                onChange={this.onChangeToState.bind(this, 'formData.password')}
              />
            </label>
            <button type={'button'} onClick={this._onClick3}>
              SetPrivate Package
            </button>
            <button className="wp-10" type="submit">
              (--登录--v2.0.6)
            </button>
          </form>
        </div>
      </div>
    );
  }
}
