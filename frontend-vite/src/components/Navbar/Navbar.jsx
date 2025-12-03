import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div classname="nav-logo">
        <img src={logo} alt="logo"/>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
          <li>Cart</li>
        
      </ul>
      
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;
