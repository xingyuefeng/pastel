import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.less'


export default class Slider extends Component {


  renderMenus(title, menus) {
    return <div className="slider-menu">
      <div className="slider-menu-label">{title}</div>
      {
        menus.map(item => <Link key={item.name} className="slider-menu-item" to={`/components/${item.name}`} >{item.description}</Link>)
      }
    </div>
  }

  render() {
    const { menus } = this.props;
    return (
      <div className="slider">
        {/* <Link to="/components/QuickStart" >QuickStart</Link>
        <Link to="/components/Button" >Button</Link> */}
        {this.renderMenus('开发指南', menus.documents)}
        {this.renderMenus('操作反馈', menus.components.basicComponents)}
      </div>
    )
  }
}

Slider.Item = (props) => <li>{props.children}</li>
