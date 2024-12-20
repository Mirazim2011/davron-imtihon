import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./companents/HomePage/HomePage";
import AboutPage from "./companents/AboutPage/AboutPage";

const App = () => {
  return (
    <div>
      <h1 className="text-gray-800  text-3xl font-bold">Our Restaurants</h1>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
