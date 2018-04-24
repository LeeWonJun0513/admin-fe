import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Greentea',
            age: 18
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            age: this.state.age + 1
        })
    }
    onValueChange(e) {
        this.setState({
            age: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>i am {this.state.name}</h1>
                <p>i am {this.state.age} years old</p>
                <button onClick={(e) => { this.handleClick(e) }}>加一岁</button>
                <input type="text" onChange={(e) => { this.onValueChange(e) }} />
            </div>
        )
    }
}

class Title extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return <h1>{this.props.name}{this.props.children}</h1>
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Title name='title test'>
                    <p>link</p>
                </Title>
                <hr/>
                <Component/>
            </div>
        ) 
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)