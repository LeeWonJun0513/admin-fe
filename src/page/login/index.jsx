import React from 'react'

import './index.scss'
import User from 'service/user-service.jsx'
import MUtil from 'util/mm.jsx'

const _mm = new MUtil()
const _user = new User()

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      redirect: _mm.getUrlParam('redirect') || '/'
    }
  }
  componentWillMount() {
    document.title = '登录 - MMALL ADMIN'
  }
  // 当表单发生改变
  onInputChange(e) {
    let inputName = e.target.name,
        inputValue = e.target.value
    this.setState({
      [inputName]: inputValue
    })
  }
  onInputKeyUp(e) {
    if (e.keyCode === 13) {
      this.onSubmit()
    }
  }
  // 用户提交表单
  // http://admintest.happymall.com
  onSubmit() {
    let loginInfo = {
      username: this.state.username,
      password: this.state.password
    },
      checkResult = _user.checkLoginInfo(loginInfo)
    // 验证通过
    if (checkResult.status) {
      _user.login(loginInfo)
        .then(res => {
          _mm.setStorage('userInfo',res)
          this.props.history.push(this.state.redirect)
        })
        .catch(errMsg => {
          _mm.errorTips(errMsg)
        })
    } else {
      _mm.errorTips(checkResult.msg)
    }
  }
  render() {
    return (
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel- login-panel">
            <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
            <div className="panel-body">
              <div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Username</label>
                  <input type="text"
                    name="username" 
                    className="form-control" 
                    placeholder="Username"
                    onKeyUp={e => this.onInputKeyUp(e)}
                    onChange={e => this.onInputChange(e)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password"
                    name="password" 
                    className="form-control" 
                    placeholder="Password"
                    onKeyUp={e => this.onInputKeyUp(e)}
                    onChange={e => this.onInputChange(e)}/>
                </div>
                <button className="btn btn-block btn-primary"
                  onClick={e => this.onSubmit()}>Login</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Login