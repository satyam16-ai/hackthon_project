// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import DonorLogin from "./pages/DonorLogin";
import NgoLogin from "./pages/NgoLogin";
import DonorRegister from "./pages/DonorRegister";
import NgoRegister from "./pages/NgoRegister";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/donor/login" element={<DonorLogin />} />
            <Route path="/ngo/login" element={<NgoLogin />} />
            <Route path="/donor/register" element={<DonorRegister />} />
            <Route path="/ngo/register" element={<NgoRegister />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}