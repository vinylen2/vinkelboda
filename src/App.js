import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Login from './components/Login';

import UserContext from './contexts/user-context.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{token: false}}>
        <Login/>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
