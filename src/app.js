import 'styles/index';
import reactLogo from 'images/react_logo.svg';
import snipImg from 'images/Snip20170830_1.png';
import {Button} from 'element-react';
import 'element-theme-default';


export default class extends React.Component {

  _onClick = e => {
    console.log('img!');
  };

  _onClick2 = e => {
    console.log('from element react!');
  };

  render() {
    return <div className="app">
      <h1>Hello World Fei?!</h1>
      <p>Foo to the bar</p>
      <Button type="primary" onClick={this._onClick2}>Button From element-react</Button>
      <img src={reactLogo} onClick={this._onClick}/>
      <p className="tc">
        <img src={snipImg} alt=""/>
      </p>
    </div>;
  }
};
