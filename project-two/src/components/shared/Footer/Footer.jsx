import React from "react";
import './Footer.scss'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav class="d-flex justify-content-center navbar bottom navbar-dark">
      <div class="footer__icons d-flex justify-content-center">
        <Link to="/" class="navbar-brand"><i class="fab fa-facebook-f"></i></Link>
        <Link to="/" class="navbar-brand"><i class="fab fa-twitter"></i></Link>
        <Link to="/" class="navbar-brand"><i class="fab fa-instagram"></i></Link>
      </div>
    </nav>
  );
}

export default Footer;
