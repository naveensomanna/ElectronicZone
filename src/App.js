import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import Product from './components/product/Product'
import 'antd/dist/antd.css'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/product/:id' component={Product} />
      </Switch>
    </Router>
  )
}

export default App
