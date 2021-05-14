import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;