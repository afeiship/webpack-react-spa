import AppBase from 'components/scripts/index';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'element-theme-default';
import Home from 'views/home';
import About from 'views/about';

export default class extends AppBase {
  static initialState() {
    return {
      memory: {
        initialData: {
          tes: 123,
          age: 100,
          items: []
        },
        myInitial: 0,
        sum: 0
      }
    }
  }

  _onClick = e => {
    console.log('img!');
  };

  _onClick2 = e => {
    console.log('from element react!');
  };

  render() {
    return (
      <Router ref="root">
        <div className="app route-container">
          <ul className="global-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/1/dc1234">About</Link></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/about/:id/:uid" component={About}/>
        </div>
      </Router>
    );
  }
}
