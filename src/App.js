import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Show } from './components/show/Show';
import { Lessons } from './components/lessons/Lessons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/show">Cards</Link>
            </li>
            <li>
              <Link to="/lessons">Lessons</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/show">
              <Show />
            </Route>
            <Route path="/lessons">
              <Lessons />
            </Route>
          </Switch>
        </div>
      </Router>
      </header>
    </div>
  );
}

export default App;
