import React from 'react'
import Vid from './VideoIndex.js'
import About1 from './About1.js'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginForm from './loginForm.js'
import Student_nav from './student_nav.js'

const App = () => {
  
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Vid />
            <About1 title='EXCELLENCE'/>
          </Route>
          <Route path='/hello'>
            <Student_nav />
          </Route>
          <Route path='/logins'>
            <Navbar />
            <LoginForm />
          </Route>
        </Switch>
          
      </React.Fragment>
    </Router>
      
  )
}

export default App
