import React from 'react'
import ReactDOM from 'react-dom'
import Admin from './Admin'
import Home from './Home'
import 'antd/dist/antd.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
