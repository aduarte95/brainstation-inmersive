import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark primary-background">
      <Link to="/" className="navbar-brand">
        <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
        Bootstrap
      </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item active">
        <Link to="/" className="nav-link"> Home <span className="sr-only">(current)</span></Link>
      </li>
      
      <li className="nav-item">
        <Link to="/" className="nav-link"> Gallery </Link>
      </li>

      <li className="nav-item">
        <Link to="/" className="nav-link"> Cool Sites </Link>
      </li>

      <li className="nav-item">
        <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Learn About
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/" className="dropdown-item" href="/">Animals</Link>
          <Link to="/" className="dropdown-item" href="/">Solar System</Link>
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
