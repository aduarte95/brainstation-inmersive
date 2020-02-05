import React from 'react';
import './App.scss';
import Navbar from './components/shared/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import MemberDetail from './components/MemberDetail/MemberDetail';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path="/solar-system-member/:id" component={props => <MemberDetail {...props}/>}  />
          <Route path="/" component={props => <HomePage {...props}/>}  />
        </Switch>
    </Router>
  );
}

export default App;
