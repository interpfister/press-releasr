import React from 'react';
import { Route, Link } from 'react-router-dom'
import Entry from '../entry'
import Results from '../results'

const App = () => (
  <div>
    <header>
      <Link to="/">Entry</Link>
      { ' ' }
      <Link to="/results">Results</Link>
    </header>

    <main>
      <Route exact path="/" component={Entry} />
      <Route exact path="/results" component={Results} />
    </main>
  </div>
)

export default App
