import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import FeaturedNGOs from "./components/FeaturedNGOs";
import DonorLogin from "./pages/DonorLogin"; // Your Donor Login component
import NgoLogin from "./pages/NgoLogin"; // Your NGO Login component
import DonorRegister from "./pages/DonorRegister"; // Your Donor Registration component
import NgoRegister from "./pages/NgoRegister";

import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/donor/login" element={<DonorLogin />} />
          <Route path="/ngo/login" element={<NgoLogin />} />
          <Route path="/donor/register" element={<DonorRegister />} />
          <Route path="/ngo/register" element={<NgoRegister />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
      <Hero />
      <FeaturedNGOs />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
}
