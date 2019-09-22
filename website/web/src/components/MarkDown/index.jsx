import React, { Component } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-gist.css';
import './index.less';

export default class Markdown extends Component {
  render() {
    const { document, className } = this.props;

    if (typeof document === 'string') {
      const renderer = new marked.Renderer();

      // 表格
      renderer.table = (header, body) => {
        return `<div class="grid-container"><table class="grid"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
      };

      // 代码
      // highlightjs对jsx解析还不完善，自闭合标签会破坏高亮显示，暂未解决。
      // https://github.com/highlightjs/highlight.js/issues/1646
      renderer.code = (code, language) => {
        // Check whether the given language is valid for highlight.js.
        const validLang = !!(language && hljs.getLanguage(language));
        // Highlight only if the language is valid.
        const highlighted = validLang ? hljs.highlight(language, code).value : code;
        // Render the highlighted code with `hljs` class.
        return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
      };

      // 标题
      // renderer.heading = (text, level) => {
      //   const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      //   return `
      //     <h${level}>
      //       <a name="${escapedText}" class="anchor" href="#${escapedText}">
      //         <span class="header-link">#</span>
      //       </a>
      //       ${text}
      //     </h${level}>`;
      // };

      const html = marked(document, { renderer });
      return <div className='markdown-container' dangerouslySetInnerHTML={{ __html: html }} />;
    }

    return <span />;
  }
}
