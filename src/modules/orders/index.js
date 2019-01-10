import { $api, $store, $app, $config } from '#';
import HedaerView from './views/header-view';
@mixin(['param', HedaerView])
export default class extends React.Component {
  componentDidMount() {
    console.log('did');
  }

  render() {
    console.log('orders index loaded', this.params);
    return (
      <div>
        {this.headerView}
        Orders Index View
      </div>
    );
  }
}
