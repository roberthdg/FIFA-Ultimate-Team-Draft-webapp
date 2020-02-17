import React from 'react';
import Header from './layout/Header';
import Draft from './layout/Draft';
import Leaderboard from './layout/Leaderboard';
import Rules from './layout/Rules';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Draft}/>
        <Route path="/leaderboard" component={Leaderboard}/>
        <Route path="/rules" component={Rules}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
