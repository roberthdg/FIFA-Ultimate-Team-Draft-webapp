import React, { Suspense, lazy } from 'react';
import Header from './layout/Header';
import Start from './layout/StartDraft';
import Draft from './layout/Draft';
import Rules from './layout/Rules';
import Leaderboard from './layout/Leaderboard'
import  { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Squad = lazy(() => import('./layout/Squad'));
const Loading = () => <div>Loading route...</div>;

function App() {

  const draftStarted = useSelector(state => state.draftStarted)
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ draftStarted? Draft : Start }/>
        <Route path="/rules" component={Rules}/>
        <Route path="/leaderboard" component={Leaderboard}/>
        <Suspense fallback={Loading}>
          <Route path="/squad/:id" component={Squad}/>
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
