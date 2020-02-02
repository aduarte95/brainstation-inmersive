import React from 'react';
import './App.scss';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthorDetailsPage from './pages/AuthorDetailsPage'
import Navbar from './components/shared/Navbar/navbar';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path={`/author/:id`} render={props => <AuthorDetailsPage {...props}/>}  />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
