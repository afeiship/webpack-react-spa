import AppBase from 'components/scripts/index';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
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
    const {initialData} = AppBase.$.memory;
    return (
      <Router ref="root">
        <div className="app route-container">
          <ul className="global-nav">
            <li><NavLink activeClassName='active' to="/" exact>Home</NavLink></li>
            <li><NavLink activeClassName='active' to="/about/1/dc1234">About</NavLink></li>
          </ul>

          <div className="init-data">
            <pre><code>
              {
                JSON.stringify(initialData, null, 4)
              }
            </code></pre>
          </div>

          <Route exact path="/" component={Home}/>
          <Route path="/about/:id/:uid" component={About}/>
        </div>
      </Router>
    );
  }
}
