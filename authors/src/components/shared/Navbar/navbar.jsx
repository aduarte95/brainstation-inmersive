import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';


function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-brand" href="#">
                <img src="https://www.pinclipart.com/picdir/big/72-727996_quill-with-ink-icon-poetry-icon-logo-clipart.png" width="30" height="30" alt="" />
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link"> Authors <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>        
      );
};

export default Navbar;