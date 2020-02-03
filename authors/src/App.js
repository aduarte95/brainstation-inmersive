import React from 'react';
import './App.scss';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthorDetailsPage from './pages/AuthorDetailsPage';
import BookDetailsPage from './pages/BookDetailsPage';
import Navbar from './components/shared/Navbar/navbar';
import AddBook from './components/AddBook/addBook';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path={`/author/:authorId/book/:bookId`} render={props => <BookDetailsPage {...props}/>}  />
          <Route path={`/author/:authorId/add-book`} render={props => <AddBook {...props}/>}  />
          <Route path={`/author/:id`} render={props => <AuthorDetailsPage {...props}/>}  />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
