import 'styles/index';
import reactLogo from 'images/react_logo.svg';
import snipImg from 'images/Snip20170830_1.png';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Button} from 'element-react';
import 'element-theme-default';
import Home from 'views/home';
import About from 'views/about';


export default class extends React.Component {

  _onClick = e => {
    console.log('img!');
  };

  _onClick2 = e => {
    console.log('from element react!');
  };

  render() {
    return (
      <Router>
        <div className="app route-container">
          <ul className="global-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
};
