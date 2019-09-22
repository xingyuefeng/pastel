import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route } from "react-router-dom";
import "normalize.css";
import Home from './router/home';
import './index.less';
import Components from './router/components'

@hot
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path='/' exact component={Home} />
        <Route path='/components'  component={Components} />
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)