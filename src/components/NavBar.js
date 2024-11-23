import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="app-name">Pet Heaven</Link>
      <div className="menuitem">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/dogs">Dogs</Link>
        <Link to="/adopt">Adoption Form</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;
