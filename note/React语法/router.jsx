// 页面路由
window.location.href = 'http://www.baidu.com'
history.back()

// hash路由
widnow.location.href = '#hash'
widnow.onhashchange = function() {
  console.log('current hash:', window.location.hash)
}

// h5 路由
// 推进一个状态
history.pushState('name', 'title', '/path')
// 替换一个状态
history.replaceState('name', 'title', '/path')
// popstate
widnow.onpopstate = function() {
  console.log(widnow.location.href)
  console.log(widnow.location.pathname)
  console.log(widnow.location.hash)
  console.log(widnow.location.search)
}

// React-Router
// yarn add react-router-dom@4.2.2
/* 
  <BrowserRouter> / <HashRouter> 路由方式
  <Route> 路由规则
  <Switch> 路由选项
  <Link> / <NavLink> 路由导航
  <Redirect> 自动跳转
*/