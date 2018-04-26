import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    // 构造函数
    constructor(props) {
        super(props)
        this.state = {
            data: 'old state'
        }
        console.log('初始化数据','constructor')
    }
    // 组件将要加载
    componentWillMount() {
        console.log('componentWillMount')
    }
    // 组件加载完成
    componentDidMount() {
        console.log('componentWillMount')
    }
    // 将要接受父组件传来的props
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    // 子组件是不是应该更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }
    // 组件将要更新
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    // 更新完成
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    // 点击事件
    handleClick() {
        console.log('更新数据')
        this.setState({
            data: 'new state'
        })
    }
    // 组件销毁
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    // 渲染
    render() {
        console.log('render')
        return (
            <div>
                <div>Props: {this.props.data}</div>
                <button onClick={() => {this.handleClick()}}>更新组件</button>
            </div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: 'old props',
            hasChild: true
        }
    }
    onPropsChange() {
        this.setState({
            data: 'new props'
        })
    }
    onDestoryChild() {
        console.log('干掉子组件')
        this.setState({
            hasChild: false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.hasChild ? <Component data={this.state.data}/> : null
                }
                <button onClick={() => {this.onPropsChange()}}>改变props</button>
                <button onClick={() => {this.onDestoryChild()}}>干掉子组件</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)