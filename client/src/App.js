import React, { Component } from 'react'
import Login from './components/forms/Login'
import Register from './components/forms/Register'
import Dashboard from './components/dashboard/Dashboard'

import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
         <div className='App'>
           <Route exact path="/" component={Register} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/dashboard" component={Dashboard} />
          </div>
         </Router>
         </Provider>
    )
  } 
}

export default App