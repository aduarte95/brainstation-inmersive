import React from 'react';
import './Navbar.scss';
import {NavLink, Link} from 'react-router-dom';

function Navbar() {
  
  return (
    <nav className="navbar-container navbar navbar-expand-lg navbar-dark primary-background">
      <div className="navbar-brand d-flex align-items-center">
        <img src="https://static.thenounproject.com/png/40868-84.png" width="50" height="50" className="navbar-container__logo-img d-inline-block align-top" alt=""/>
        <div className="navbar-container__logo-text">
          <div className="navbar-container__logo-text-1">
            Little
          </div> 
          <div className="navbar-container__logo-text-2">
            Conquerors
          </div>
        </div>
      </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item">
        <NavLink activeClassName="selected-link"  exact to="/" className="nav-link"> Home </NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink activeClassName="selected-link"  to="/gallery" className="nav-link"> Gallery </NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeClassName="selected-link"  activeClassName="selected-link" to="/cool-sites" className="nav-link"> Cool Sites </NavLink>
      </li>

      <li className="nav-item">
        <Link activeClassName="selected-link"  activeClassName="selected-link"  exact to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Learn About
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/" className="dropdown-item" href="/">Animals</Link>
          <Link activeClassName="selected-link"  to="/" className="dropdown-item" href="/">Solar System</Link>
        </div>
      </li>
    </ul>

    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

  </div>
</nav>
  );
}

export default Navbar;
