import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";


const MainRoutes = () => {
  return (
    <>
      {/* Navbar and all the routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </>
  );
};
export { MainRoutes };

// /products/women