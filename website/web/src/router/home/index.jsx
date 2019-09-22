import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Conatiner from '../../components/Container'
import './index.less'

export default class Home extends Component {
  render() {
    return (
      <Conatiner>
        <div className="introduce">
          <h3>一个自我学习产生的组件库，丑是丑但是学到本事~</h3>
          <div className="btns">
            <Link to="components"><button className="view-btn">查看组件</button></Link>
            <button>扫码体验</button>
          </div>
        </div>

      </Conatiner>
    
    )
  }
}
