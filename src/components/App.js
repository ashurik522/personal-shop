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
      <Header />
      <Routes></Routes>
    </div>
  );
}
