import React from 'react';
import ReactDOM from 'react-dom';

class Child1 extends React.Component {
    constructor(props) {
        super(props)
    }
    changeChild2BgColor() {
        this.props.ChangeChlid2Color('red')
    }
    render() {
        return (
            <div>
                <h1>child1: {this.props.bgColor}</h1>
                <button onClick={(e) => { this.changeChild2BgColor(e) }}>改变child2</button>
            </div>
        )
    }
}
class Child2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{background: this.props.bgColor}}>
                <h1>child2: {this.props.bgColor}</h1>
            </div>
        )
    }
}

class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            child2bgColor: '#999'
        }
    }
    child2BgColorChange(color) {
        this.setState({
            child2bgColor: color
        })
    }
    render() {
        return (
            <div>
                <Child1 ChangeChlid2Color={(color) => {this.child2BgColorChange(color)}}/>
                <Child2 bgColor={this.state.child2bgColor}/>
            </div>
        )
    }
}


ReactDOM.render(
    <Father/>,
    document.getElementById('app')
)