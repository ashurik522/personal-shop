import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./shop.js";
import AboutUs from "./about-us.js";
import Cart from "./cart.js";
import Login from "./login.js";
import Home from "./home.js";
import Header from "./header.js";
import "../styles/app.css";

export default function App() {
  return (
    <div>
      <h1>Drew</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
