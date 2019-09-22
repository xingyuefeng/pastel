import React, { Component } from 'react'
import * as antd from 'antd'
import ReactDOM from 'react-dom'
import { transform } from '@babel/standalone';


export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.containerId = `${parseInt(Math.random() * 1e9, 10).toString(36)}`;
    this.document = props.children.match(/([^]*)\n?(```[^]+```)/);
    this.title = String(this.document[1]);
    this.source = this.document[2].match(/```(.*)\n?([^]+)```/);
  }

  componentDidMount() {
    this.renderSource(this.source[2])
  }

  renderSource(codeMd) {
    const value = codeMd
    .replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'antd';/, 'const { $1 } = antd;')
    .replace(/ReactDOM.render\(\s?([^]+?)(,\s?mountNode\s?\))/g, `
      ReactDOM.render(
        $1,
        document.getElementById('${this.containerId}'),
      ) 
    `);
    const { code } = transform(value, {
      presets: ['es2015', 'react'],
      plugins: ['proposal-class-properties'],
    });
    const args = ['React', 'ReactDOM', 'antd', code];
    const argv = [React, ReactDOM, antd];
    
    new Function(...args)(...argv);
  }


  render() {
    return (
      <antd.Card title={this.title}>
        <div id={this.containerId} />
      </antd.Card>
    )
  }
}
