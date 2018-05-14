class MUtil {
  request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        data: param.data || null,
        success: res => {
          // 数据请求成功
          if (res.status === 0) {
            typeof resolve === 'function' && resolve(res.data, res.msg)
          } else if (res.status === 10) {
            // 没有登录状态,强制登录
            this.doLogin()
          } else {
            // 
            typeof reject === 'function' && reject(res.msg || res.data)
          }
        },
        error: err => {
          typeof reject === 'function' && reject(err.statusText)
        }
      })
    })
  }
  // 跳转登录
  doLogin() {
    window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`
  }
  // 获取url参数
  getUrlParam(name) {
    // xxx.com?param=123&params1=456
    let queryString = window.location.search.split('?')[1] || '',
        reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        result = queryString.match(reg)
    return result ? decodeURIComponent(result[2]) : null
  }
  successTips(successMsg) {
    alert(successMsg || '操作成功')
  }
  // 错误提示
  errorTips(errMsg) {
    alert(errMsg || '好像哪里不对了~')
  }
  // 本地存储
  setStorage(name, data) {
    let dataType = typeof data
    // JSON类型
    if (dataType === 'object') {
      localStorage.setItem(name, JSON.stringify(data))
    } 
    // 基础类型 
    else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0) {
      localStorage.setItem(name, data)
    } else {
      alert('该类型不能用于本地存储')
    }
  }
  // 取出本地存储内容
  getStorage(name) {
    let data = localStorage.getItem(name)
    if (data) {
      return JSON.parse(data)
    } else {
      return ''
    }
  }
  // 删除本地存储
  removeStorage(name) {
    localStorage.removeItem(name)
  }
}

export default MUtil