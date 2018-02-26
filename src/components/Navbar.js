import React from "react";
import Link from "gatsby-link";

import logo from "../img/shop-worked-logo.png";

const Navbar = () => (
  <nav className="navbar is-transparent" style={{ marginTop: "1rem" }}>
    <div className="container">
      <div className="navbar-brand">
        <Link
          to="/"
          className="navbar-item"
          style={{ paddingLeft: "0", marginRight: "1.5rem" }}
        >
          <figure className="image">
            <img
              src={logo}
              alt="Shop Worked Logo"
              style={{ maxHeight: "none", width: "450px" }}
            />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item is-size-3" to="/about">
          About
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
