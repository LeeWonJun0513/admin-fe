import React from 'react';
import ReactDOM from 'react-dom';

function Component() {
    return <p>i am greentea</p>
}

class ES6component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : 'greentea'
        }
    }
    render() {
        setTimeout(() => {
            this.setState({
                name: '逗比'
            })
        }, 2000)
        return <div><p>郭倩辰 是 {this.state.name}</p><p>i am {this.props.age}</p></div>
    }
}

ReactDOM.render(
    <div>
        <Component/>
        <ES6component age="25"/>
    </div>,
    document.getElementById('app')
)