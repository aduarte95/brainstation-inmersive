import React from 'react';
import './App.scss';
import Navbar from './components/shared/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import MemberDetail from './components/MemberDetail/MemberDetail';
import Footer from './components/shared/Footer/Footer';
import TestMe from './components/TestMe/TestMe';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/test-me" component={props => <TestMe {...props}/>}  />
        <Route path="/solar-system-member/:id" component={props => <MemberDetail {...props}/>}  />
        <Route path="/" component={props => <HomePage {...props}/>}  />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
