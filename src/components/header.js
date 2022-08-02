import { NavLink } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <header className="header-container">
      <h1>Maria's Calm</h1>
      <nav className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </header>
  );
}
