import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="container">
        <Routes>
          <Route path="/" index element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    </div>
  );
};

export default App;
