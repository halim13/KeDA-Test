import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

          <a href="#" className="logo d-flex align-items-center me-auto">
            <img src={require("../assets/img/logo.png")} alt="" />
            <h1 className="sitename">KeDA</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="/#hero">Home</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#pricing">Pricing</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <Link className="btn-getstarted" to="/login">Login</Link>

        </div>
      </header>
  );
}

export default Header;
