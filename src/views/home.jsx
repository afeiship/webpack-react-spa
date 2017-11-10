import {$route} from 'components/scripts/index';

export default class extends React.Component {

  _onClick = (inEvent) => {
    $route.push('/about/2/dc1235');
  };

  render() {
    const {title} = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <p>Home page content.</p>
        <button onClick={this._onClick}>To About Page</button>
      </div>
    )
  }
}
