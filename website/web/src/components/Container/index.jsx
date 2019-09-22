import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.less'

export default class BasicLayout extends Component {
  render() {
    return (
      <div className="app-container" style={this.props.style}>
        <header>
          <div className="header-container">
            <div className="logo">
              <Link to="/">
              <img alt="logo" src="../../../../../asstes/logo.svg" />
              Pastel
              </Link>
            </div>
            <nav>
              <ul className="nav">
                <li><Link to="components">Components</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        { this.props.children }
      </div>
    )
  }
}
