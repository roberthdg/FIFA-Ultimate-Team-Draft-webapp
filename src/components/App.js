import React from 'react';
import Header from './layout/Header';
import Start from './layout/StartMenu';
import Draft from './layout/Draft';
import Leaderboard from './layout/Leaderboard';
import Rules from './layout/Rules';
import  { useSelector } from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  const draftStarted = useSelector(state => state.draftStarted)
  
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ draftStarted? Draft : Start }/>
        <Route path="/leaderboard" component={Leaderboard}/>
        <Route path="/rules" component={Rules}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
