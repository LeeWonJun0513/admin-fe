import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

let style = {
    color: 'red',
    fontSize: '30px'
}
let name = 'greentea'
let flag = true
let arr = ['a', 'b', 'c']

let jsx = (
    <div style={style} className='jsx'>
        {/* 条件判断 */}
        {
           flag ? <p>i am {name}</p> : <p>i am not {name}</p>
        }
        {/* 循环 */}
        {
            arr.map((item, index) => <p key={index}>{item}</p>)
        }
    </div>
)
ReactDOM.render(
    jsx, 
    document.getElementById('app')
)