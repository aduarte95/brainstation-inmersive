import React from 'react';
import './App.scss';
import Navbar from './components/shared/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path="/" component={props => <HomePage {...props}/>}  />
        </Switch>
    </Router>
  );
}

export default App;
