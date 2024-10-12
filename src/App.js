// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import DonorLogin from "./pages/DonorLogin";
import NgoLogin from "./pages/NgoLogin";
import DonorRegister from "./pages/DonorRegister";
import NgoRegister from "./pages/NgoRegister";
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './PrivateRoute';

import "./App.css";

// Layout component
const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        } />

        {/* Main layout routes */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/donor/login" element={<Layout><DonorLogin /></Layout>} />
        <Route path="/ngo/login" element={<Layout><NgoLogin /></Layout>} />
        <Route path="/donor/register" element={<Layout><DonorRegister /></Layout>} />
        <Route path="/ngo/register" element={<Layout><NgoRegister /></Layout>} />
        <Route path="*" element={<Layout><div>Page not found</div></Layout>} />
      </Routes>
    </Router>
  );
}