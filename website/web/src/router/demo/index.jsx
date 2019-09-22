import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'
// import { Link } from 'react-router-dom'
import { transform } from '@babel/standalone';
import * as antd from 'antd'
import 'antd/dist/antd.css'
import demoMod from './demo.md'
import Demo from './Demo'





export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.style = null;
    this.components = new Map();
    this.nodeList = [];
  }

  componentDidMount() {
    this.renderDOM()
  }

  renderDOM() {
    for (const [id, component] of this.components) {
      const div = document.getElementById(id);
      this.nodeList.push(div);
      if (div instanceof HTMLElement) {
        ReactDOM.render(component, div);
      }
    }
  }
  
  render() {
    this.components.clear();
    const html = marked(demoMod
      .replace(/## 自定义 Iconfont 图标\s?([^]+)/g, '')//
      .replace(/## API\s?([^]+)/g, '') // 排除API显示
      .replace(/##\s?([^]+?)((?=##)|$)/g, (match, p1) => {
        const id = parseInt(Math.random() * 1e9, 10).toString(36)
        this.components.set(id, React.createElement(Demo, this.props, p1));
        return `<div id=${id}></div>`;
      }),
      {
        renderer: new marked.Renderer(),
      },
      )
    return (
      <div>
        {/* home */}
        {/* <Link to="/component" >查看文档</Link> */}
        <main dangerouslySetInnerHTML={{ __html: html }} />
      </div> 
    )
  }
}
