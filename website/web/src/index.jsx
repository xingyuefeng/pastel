import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import Home from './router/home';
import './style.less';
import Components from './router/component'

@hot
class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/components'  component={Components} />
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
