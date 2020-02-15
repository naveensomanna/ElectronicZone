import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/home/Home'
import 'antd/dist/antd.css'
import { configureStore } from './store/Store'

const store = configureStore()
function App () {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
