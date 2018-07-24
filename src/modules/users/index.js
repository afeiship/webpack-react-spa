import AppBase, {$api, $date, $store} from '#';
import {Table, Icon, Card, Button, Modal} from 'antd';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class extends React.Component {

  state = {
    text:'my etst',
    columns: [
      {
        title: '手机号码',
        dataIndex: 'phone',
        key: 'phone'
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: '公司',
        dataIndex: 'company',
        key: 'company'
      },

      {
        title: '注册时间',
        dataIndex: 'date_joined',
        key: 'date_joined',
        render: (text, record) => {
          return <span>{this._toDefaultDateTime(record.date_joined)}</span>
        }
      },
      {
        title: '最近登录时间',
        dataIndex: 'last_login',
        key: 'last_login',
        render: (text, record) => {
          return <span>{this._toDefaultDateTime(record.last_login)}</span>
        }
      },
      {
        title: '消费金额(￥)',
        dataIndex: 'consumptionTotal',
        key: 'consumptionTotal'
      },
      {
        title: '最近消费时间',
        dataIndex: 'consumptionLastTime',
        key: 'consumptionLastTime',
        render: (text, record) => {
          return <span>{this._toDefaultDateTime(record.consumptionLastTime)}</span>
        }
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => <Link to={`/admin/users/show/${record.uid}`}
                                        onClick={this._toDetail.bind(this, record)}>查看</Link>,
      }
    ],
    data: [],
    current_page: 0,
    total: 0
  };

  load(inData) {
    $api.user_index(inData).then(({data, filter, total}) => {
      this.setState({data, total});
    });
  }

  componentDidMount() {
    this.load();
  }

  _toDefaultDateTime(inValue) {
    return inValue ? $date.format( new Date(inValue) ) : '-';
  }

  _onAdd = (inEvent) => {
    AppBase.command('modal.user', true);
  };

  _onPageChange = (current_page) => {
    this.setState({current_page}, () => {
      this.load({current_page});
    });
  };

  _toDetail = (inEvent) => {
    console.log(inEvent);
    AppBase.$.session = {user: inEvent};
  };

  _handleChange = e =>{
    console.log(e);
  };

  render() {
    const {columns, current_page, total, data}  = this.state;
    return (
      <Card title={`用户管理(${total})`} bordered={false}>
        USER MANAGER!
      </Card>
    );
  }
}