import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Route exact path={['/', '/about']} component={About} />
      <Route exact path={'/portfolio'} component={Portfolio} />
      <Route exact path={'/contact'} component={Contact} />
    </Router>
  )
}

export default App;
