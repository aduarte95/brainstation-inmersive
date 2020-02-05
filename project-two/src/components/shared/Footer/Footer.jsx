import React from "react";
import './Footer.scss'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="d-flex justify-content-center navbar bottom navbar-dark">
      <div className="footer__icons d-flex justify-content-center">
        <Link to="/" className="navbar-brand"><i className="fab fa-facebook-f"></i></Link>
        <Link to="/" className="navbar-brand"><i className="fab fa-twitter"></i></Link>
        <Link to="/" className="navbar-brand"><i className="fab fa-instagram"></i></Link>
      </div>
    </nav>
  );
}

export default Footer;
