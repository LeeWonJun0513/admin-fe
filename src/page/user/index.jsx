import React from 'react'
import { Link } from 'react-router-dom'

import PageTitle from "component/page-title/index.jsx"
import Pagination from 'util/pagination/index.jsx'
import Statistic from 'service/statistic-service.jsx'
import MUtil from 'util/mm.jsx'

const _mm = new MUtil()
const _statistic = new Statistic()

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageNum: 1
    }
  }
  componentDidMount() {
    this.loadUserList()
  }
  loadUserList() {
    _user.getUserList(this.state.pageNum)
      .then(res => {
        this.setState(res)
      })
      .catch(errMsg => {
        _mm.errorTips(errMsg)
      })
  }
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="用户列表!"></PageTitle>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-border">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ID</th>
                  <th>ID</th>
                  <th>ID</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Pagination current={11} total={200} onChange={(pageNum) => {
          console.log(pageNum)
        }}/>
      </div>
    )
  }
}

export default UserList