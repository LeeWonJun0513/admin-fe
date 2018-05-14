import React from 'react'

class CategorySelector extends React.Component {
  render() {
    return (
      <div className="col-md-5">
        <select name="" id="" className="form-control cate-select">
          <option value="">请选择一级分类</option>
        </select>
        <select name="" id="" className="form-control cate-select">
          <option value="">请选择二级分类</option>
        </select>
      </div>
    )
  }
}

export default CategorySelector