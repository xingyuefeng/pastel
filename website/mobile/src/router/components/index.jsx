import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable'
import './index.less'
import siteConfig from '../../../../site.config'
import MarkDown from '../../components/MarkDown'
import Format from '@/website/utils/format'

const LoadableComponent = (component) => {
  return Loadable({
    loader: component.module,
    render: (loaded, props) => {
      const C = loaded.default;
      return <MarkDown document={C} className={`${Format.camel2Dash(component.name)}-page`} {...props} />;
    },
    loading: () => null,
  });
};

export default class Components extends Component {

  state = {
    routes: []
  }

  componentDidMount() {
    this.renderRoutes()
  }
  renderRoutes(configs = siteConfig) {
    // čĺ
    const routeKyes = Object.keys(configs)
    routeKyes.forEach((item) => {
      if (Array.isArray(configs[item])) {
        configs[item].forEach(route => {
          this.setState((preState) => ({
            routes: preState.routes.concat(<Route key={route.name} path={`/components/${route.name}`} component={LoadableComponent(route)}  />)
          }))
          // this.routes.push()
        })
      } else {
        this.renderRoutes(siteConfig[item])
      }
    })

    // console.log(routes)
    // return routes
  }

  render() {

    return (
        <div className="component-container">
          <div className="component-content">
            <Switch>
              { this.state.routes }
              {/* { this.renderRoutes() } */}
              <Route path="*" component={LoadableComponent(siteConfig.documents[0])}  />
            </Switch>
          </div>
          <div className="simulator">
            {/* <iframe src={`${window.location.protocol}//${window.location.host}/demo.html#/${match.params.component}`} title="simulator" frameBorder="0" /> */}
          </div>
        </div>
    )
  }
}
