import React from 'react'

class RefExa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello!',
            foo: '',
            bar: '',
            opacity: 1
        }
    }

    handleClick() {
        this.refs.myInputEl.focus();
        return true
    }

    handleChange() {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }
    componentWillMount() {
        console.log('WillMount')
    }
    componentDidMount() {
        console.log('DidMount');
        var that = this;
        this.setState({
            foo: 'Hello',
            bar: 'React'
        });

        this.timer = setInterval(function() {
            var opacity = this.state.opacity;
            opacity -= 0.1;
            if(opacity < 0) {
                clearInterval(that.timer);
            }
            this.setState({
                opacity: opacity
            })
        }.bind(this),1000)
    }

    stopTimer() {
        clearInterval(this.timer);
        this.setState({
            opacity: 1
        })
    }

    componentDidUpdate(props,states) {
        console.log(props);
        console.log(states);
    }

    render() {
        console.log('render');
        var value = this.state.value;
        return (
            <form name="form" noValidate>
        <div className="form-group">
            <label className="control-label col-sm-2">operate virtualDom</label>
        <div className="col-sm-9">
            <input placeholder="focus" type="text" name="myInputEl" onChange={this.handleChange.bind(this)} value={value} ref="myInputEl" />
        </div>
        </div>

        <footer className="col-sm-12">
        <button onClick={this.handleClick.bind(this)} className="btn btn-success">focus {this.props.from}</button>
        </footer>
        <h2 style={{opacity: this.state.opacity}} className="col-sm-1">{this.state.foo}</h2>
        <h2 className="col-sm-11">{this.state.bar}</h2>
        </form>
      )
    }
  }

class ParentNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'hello'
        }
    }

    handleClick() {
        this.refs.childNodeRef.stopTimer();
    }

    render() {
        var fooArr = ['foo','bar','baz'];
        return (
            <div className="col-sm-12">
            <RefExa from="input" ref="childNodeRef"></RefExa>
                        <button className="btn btn-default" onClick={this.handleClick.bind(this)}>stop childNode timer</button>
            {
                fooArr.map(function(v,i) {
                return <button key={i} className="ml10 btn btn-danger">{v}{i}</button>
            })
            }

            </div>
            )
    }
}


export default ParentNode
