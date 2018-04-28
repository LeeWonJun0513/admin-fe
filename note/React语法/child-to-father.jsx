import React from 'react';
import ReactDOM from 'react-dom';

class Child1 extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick() {
        this.props.ChangeColor('red')
    }
    render() {
        return (
            <div>
                <h1>父组件的背景色: {this.props.bgColor}</h1>
                <button onClick={(e) => { this.handleClick(e) }}>改变父组件</button>
            </div>
        )
    }
}

class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: '#999'
        }
    }
    onBgColorChange(color) {
        this.setState({
            bgColor: color
        })
    }
    render() {
        return (
            <div style={{background: this.state.bgColor}}>
                <Child1 bgColor={this.state.bgColor} ChangeColor={(color) => {this.onBgColorChange(color)}}/>
            </div>
        )
    }
}


ReactDOM.render(
    <Father/>,
    document.getElementById('app')
)