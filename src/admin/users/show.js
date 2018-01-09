import {Table, Modal, Card, Button, Popconfirm, Row, Col} from 'antd';
import AppBase, {
  $api,
  $route,
  $config,
  $date,
  TdmDownloadTable,
  TdmQueryTable,
  TdmQueryItem
} from 'components/scripts/index';

import Edit from './edit';
import Config from './_config';

export default class extends React.Component {

  state = {
    basicItems: [],
    queryPermissions: [],
    downloadPermissions: [],
    queryItems: [
      $config.DEFAULT_REGION
    ]
  };

  _onDelete = (inEvent) => {
    const {params} =this.props.match;
    $api.user_delete(params).then(resp => {
      AppBase.notify('删除成功!');
      $route.back();
    })
  };

  _onReturn = (inEvent) => {
    $route.back();
  };

  _onAdd = (inEvent) => {
    const {queryItems} = this.state;
    queryItems.push($config.DEFAULT_REGION);
    this.setState({queryItems});
  };

  _onQueryChange = (inIndex, inEvent) => {
    const {queryItems} = this.state;
    queryItems[inIndex] = inEvent.target.value;
    this.setState({queryItems});
  };

  _onQueryRemove = (inIndex, inEvent) => {
    const {queryItems} = this.state;
    queryItems.splice(inIndex, 1);
    this.setState({queryItems});
  };

  _onQueryOk = (inEvent) => {
    const {params} =this.props.match;
    const {queryTable} = this.refs;
    const permissions = this.state.queryItems.map(item => {
      return {
        userId: params.id,
        year: item.year,
        continents: item.regions[0],
        country: item.regions[1],
        permissionType: 1,
        payTime: $date.format(new Date(), `yyyy-mm-dd'T'HH:MM:ss`),
        payType: 3
      }
    });
    $api.permissions_create(permissions).then(resp => {
      queryTable.load();
      AppBase.notify('添加成功!', resp);
    });
    AppBase.command('modal.userQuery', false);
  };

  _onQueryCancel = (inEvent) => {
    this.setState({
      queryItems: [$config.DEFAULT_REGION]
    });
    AppBase.command('modal.userQuery', false);
  };


  _showQueryModal = (inEvent) => {
    AppBase.command('modal.userQuery', true);
  };

  _onEditUser = (inEvent) => {
    const {data} = this.state;
    const {editForm} = this.refs;
    let result = {};
    nx.each(data, (key, value) => {
      result[key] = {
        value
      };
    });
    editForm.setFieldsValue(data);
    AppBase.command('modal.user', true);
  };


  _queryExtra() {
    return (
      <Button type="primary" onClick={this._showQueryModal}>添加权限</Button>
    );
  }

  load() {
    const {params} =this.props.match;
    const {user} = AppBase.$.session;
    $api.user_show(params).then(resp => {
      const data = nx.mix(resp, user);
      this.setState({
        data: data,
        basicItems: nx.pickPairs(data, [
          'phone', 'email', 'company', 'job', 'date_joined',
          'login_count', 'last_active', 'consumptionTotal', 'consumptionLastTime'
        ])
      });
    });
  }

  componentWillMount() {
    this.load();
  }

  render() {
    const {modalUserQuery}  = AppBase.$.memory;
    const {basicItems, data} = this.state;
    const {params} =this.props.match;

    return (
      <section className="user-show">
        <Row gutter={20}>
          <Col>
            <Card title="用户信息显示">
              <Row>
                {
                  basicItems.map((item, index) => {
                    if (item.key !== 'date_joined' || item.key !== 'consumptionLastTime') {
                      return (
                        <Col span={6} key={index}>
                          <dl className="mb10">
                            <dt className="c-c">{Config.fieldMapping[item.key]}</dt>
                            <dd className="c-0">{item.value || '-'}</dd>
                          </dl>
                        </Col>
                      )
                    } else {
                      return (
                        <Col span={6} key={index}>
                          <dl className="mb10">
                            <dt className="c-c">{Config.fieldMapping[item.key]}</dt>
                            <dd className="c-0">{item.value ? $date.format(item.value) : '-'}</dd>
                          </dl>
                        </Col>
                      )
                    }
                  })
                }
              </Row>
            </Card>
          </Col>
        </Row>
        <div className="blank-10"/>
        <Row gutter={20}>
          <Col span="12">
            <Card title="下载权限列表">
              <TdmDownloadTable params={params}/>
            </Card>
          </Col>
          <Col span="12">
            <Card title="购买的查询权限列表" extra={this._queryExtra()}>
              <TdmQueryTable ref="queryTable" params={params}/>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col offset="12" className="tr bg-e p10 ml10_">
            <Button onClick={this._onReturn}>返回</Button>
            <Popconfirm title="Are you sure delete this?" onConfirm={this._onDelete} okText="Yes"
                        cancelText="No">
              <Button type="danger">删除用户</Button>
            </Popconfirm>
            <Button type="primary" onClick={this._onEditUser}>修改用户信息</Button>
          </Col>
        </Row>

        <Modal
          title="修改用户数据权限"
          onOk={this._onQueryOk}
          onCancel={this._onQueryCancel}
          visible={modalUserQuery}>
          {
            this.state.queryItems.map((item, index) => {
              return (
                <TdmQueryItem key={index} onChange={this._onQueryChange.bind(this, index)}
                              onRemove={this._onQueryRemove.bind(this, index)}/>
              )
            })
          }
          <Button type="primary" onClick={this._onAdd}> 添加行 </Button>
        </Modal>

        <Edit ref="editForm" params={params} data={data}/>

      </section>
    )
  }
}