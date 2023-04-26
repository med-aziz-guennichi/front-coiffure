import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      {click ? (
        <Link className="logo" to="/">
          <h1>Aziz Shop</h1>
        </Link>
      ) : (
        <h1></h1>
      )}

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/gallerie">Gallerie</Link>
        </li>
        {/* <li>
          <Link to="/login">Sign In</Link>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li> */}
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
