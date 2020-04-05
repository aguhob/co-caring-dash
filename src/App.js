import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Chat from './pages/Chat';
import Resources from './pages/Resources';
import LeadershipDashboard from './pages/LeadershipDashboard';
import Error404 from './pages/404';

import Layout, { ScrollUp } from './components/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <ScrollUp/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/reddit'>
            <Redirect to='/chat'/>
          </Route>
          <Route exact path='/resources' component={Resources}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/leadershipdashboard' component={LeadershipDashboard}/>
          <Route path='*' component={Error404} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
