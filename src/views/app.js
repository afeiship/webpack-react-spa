import { Router, Route, hashHistory } from 'react-router';
import HomeApp from './home/index';
import DetailApp from './detail/index';
import ListApp from './list/index';

export default class RootView extends React.Component{
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={HomeApp}/>
        <Route path="/list" component={ListApp}/>
        <Route path="/detail" component={DetailApp}/>
      </Router>
    )
  }
}
