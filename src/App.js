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
import AdminNGOVerification from './components/Admin/AdminNGOVerification';
import NgoStatusTracking from './pages/NgoStatusTracking'; // Import the new status tracking page
import PrivateRoute from './PrivateRoute';
import PrivateRouteStatus from './PrivateRouteStatus'; // Import the new private route component
import TermsAndConditions from './pages/TermsAndConditions';
import RegistrationSuccess from './pages/RegistrationSuccess';// Import the NGOSetPassword component
import "../src/Auth/firebaseConfig";
import "./App.css";
import { AuthProvider } from './contexts/Authcontext'; 
import StartDonatingPage from './pages/Donor/StartDonatingPage';
import NGOsPage from './pages/NGOsPage';
import Donate from './pages/Donate';// Ensure the correct path
import PrivacyPolicy from './pages/PrivacyPolicy';
import DonorDashboard from './pages/Donor/DonorDashboard';
import Payment from './pages/payment/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailure from './pages/PaymentFailure';
import PrivateRoutePayment from './PrivateRoutePayment';

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
    <AuthProvider> {/* Wrap the Router with AuthProvider */}
      <Router>
        <Routes>
          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <PrivateRoute>
              <AdminNGOVerification />
            </PrivateRoute>
          } />
          
          {/* Main layout routes */}
          <Route path="/donate" element={<Layout><Donate/></Layout>}></Route>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/donor/login" element={<Layout><DonorLogin /></Layout>} />
          <Route path="/donor/dashboard" element={<Layout><DonorDashboard /></Layout>} />
          <Route path="/ngo/login" element={<Layout><NgoLogin /></Layout>} />
          <Route path="/donor/register" element={<Layout><DonorRegister /></Layout>} />
          <Route path="/ngo/register" element={<Layout><NgoRegister /></Layout>} />
          <Route path="/terms-and-conditions" element={<Layout><TermsAndConditions /></Layout>} />
          <Route path='/privacy-policy' element={<Layout><PrivacyPolicy/></Layout>}/>
          <Route path='/startdonating' element={<StartDonatingPage/>} />
          {/* Registration success route */}
          <Route path="/NGO-register-success" element={<RegistrationSuccess />} />
          <Route path='/ngos' element={<Layout><NGOsPage/></Layout>}/>
          {/* NGO status tracking route */}
          <Route path="/ngo/status-tracking" element={
            <PrivateRouteStatus>
              <NgoStatusTracking />
            </PrivateRouteStatus>
          } /> {/* Add this route */}
          
          {/* Private route for payment with NGO ID */}
          <Route path="/payment/:ngoId" element={
            <PrivateRoutePayment>
              <Layout><Payment /></Layout>
            </PrivateRoutePayment>
          } />

          {/* Payment success and failure routes */}
          <Route path="/payment-success" element={<Layout><PaymentSuccess /></Layout>} />
          <Route path="/payment-failure" element={<Layout><PaymentFailure /></Layout>} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<Layout><div>Page not found</div></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}