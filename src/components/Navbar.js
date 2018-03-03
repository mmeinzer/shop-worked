import React from "react";
import Link from "gatsby-link";

import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar is-transparent" style={{ marginTop: "1rem" }}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img
            src={logo}
            alt="Shop Worked Logo"
            style={{ maxHeight: "10vh", width: "auto" }}
          />
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item nav--link is-size-4" to="/about">
          About
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
