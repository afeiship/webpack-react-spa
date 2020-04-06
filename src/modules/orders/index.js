import HedaerView from './views/header-view';

@mixin(['param', HedaerView])
export default class extends React.Component {
  componentDidMount() {
    console.log('did');
  }

  render() {
    console.log('orders index loaded', this.params);
    return (
      <div className="p20">
        {this.headerView}
        <p className="f48">Orders Index View</p>
      </div>
    );
  }
}
