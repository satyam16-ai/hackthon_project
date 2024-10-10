import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import FeaturedNGOs from "./components/FeaturedNGOs";
import SelectionPage from './pages/SelectionPage';

import "./App.css";
// Placeholder components for NGO/Donor Login/Register
const NgoLogin = () => <div>NGO Login Page</div>;
const NgoRegister = () => <div>NGO Register Page</div>;
const DonorLogin = () => <div>Donor Login Page</div>;
const DonorRegister = () => <div>Donor Register Page</div>;
export default function App() {
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/auth-selection" element={<SelectionPage />} />
        <Route path="/ngo-login" element={<NgoLogin />} />
        <Route path="/ngo-register" element={<NgoRegister />} />
        <Route path="/donor-login" element={<DonorLogin />} />
        <Route path="/donor-register" element={<DonorRegister />} />
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
