/* eslint-disable import/no-extraneous-dependencies */
import "../styles/app.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Properties from "./Properties";
import SellProperty from "./SellProperty";
import NoPage from "./NoPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/sell-properties" element={<SellProperty />} />
        <Route path="/not-found" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default App;
