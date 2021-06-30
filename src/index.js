import React from 'react'
import ReactDOM from 'react-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Info from './pages/Info'
import 'antd/dist/antd.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
