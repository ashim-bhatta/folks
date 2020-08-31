import React from 'react';
import './App.css';
import Home from './pages/Home';
import {
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";

function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>

          <Route  >
            <h1>404</h1>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
