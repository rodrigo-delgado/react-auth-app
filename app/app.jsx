const React = require('react')
const ReactDOM = require('react-dom')

const Login = require('Login')

const {Route, Router, IndexRoute, hashHistory} = require('react-router')

//Load foundation
$(document).foundation()
//App css
require('style!css!sass!applicationStyles')

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/'>
        <IndexRoute component={Login} />
      </Route>
    </Router>,
    document.getElementById('app')
  )
