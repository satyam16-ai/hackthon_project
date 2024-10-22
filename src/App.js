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
import ApprovedNGOs from './pages/Admin/ApprovedNGOs';
import NGODetails from './pages/Admin/NGODetails';
import NgoStatusTracking from './pages/NgoStatusTracking'; // Import the new status tracking page
import TermsAndConditions from './pages/TermsAndConditions';
import RegistrationSuccess from './pages/RegistrationSuccess';// Import the NGOSetPassword component
import "../src/Auth/firebaseConfig";
import "./App.css";
import { AuthProvider } from './contexts/AuthContext'; 
import { NGOAuthProvider } from './contexts/NGOAuthContext'; 
import StartDonatingPage from './pages/Donor/StartDonatingPage';
import NGOsPage from './pages/NGOsPage';
import Donate from './pages/Donate';// Ensure the correct path
import PrivacyPolicy from './pages/PrivacyPolicy';
import DonorDashboard from './pages/Donor/DonorDashboard';
import Payment from './pages/payment/Payment';
import PaymentSuccess from './pages/payment/PaymentSuccess';
import PaymentFail from './pages/payment/PaymentFail';
import PrivateRoutePayment from './PrivateRoutePayment';
import NGODashboard from './pages/NGO/NGODashboard'; // Import the NGODashboard component

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
          <Route path="/admin/dashboard" element={<AdminNGOVerification />} />
          <Route path="/admin/approved-ngos" element={<ApprovedNGOs />} />
          <Route path="/admin/ngo-details/:ngoId" element={<NGODetails />} />
          
          {/* Main layout routes */}
          <Route path="/donate" element={<Layout><Donate/></Layout>}></Route>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/donor/login" element={<Layout><DonorLogin /></Layout>} />
          <Route path="/donor/dashboard" element={<Layout><DonorDashboard /></Layout>} />
          <Route path="/ngo/login" element={
            <NGOAuthProvider>
              <NgoLogin />
            </NGOAuthProvider>
          } />
          <Route path="/donor/register" element={<Layout><DonorRegister /></Layout>} />
          <Route path="/ngo/register" element={<Layout><NgoRegister /></Layout>} />
          <Route path="/terms-and-conditions" element={<Layout><TermsAndConditions /></Layout>} />
          <Route path='/privacy-policy' element={<Layout><PrivacyPolicy/></Layout>}/>
          <Route path='/startdonating' element={<StartDonatingPage/>} />
          {/* Registration success route */}
          <Route path="/NGO-register-success" element={<RegistrationSuccess />} />
          <Route path='/ngos' element={<Layout><NGOsPage/></Layout>}/>
          {/* NGO status tracking route */}
          <Route path="/ngo/status-tracking" element={<NgoStatusTracking />} /> {/* Add this route */}
          
          {/* Private route for payment with NGO ID */}
          <Route path="/payment/:ngoId" element={
            <PrivateRoutePayment>
              <Layout><Payment /></Layout>
            </PrivateRoutePayment>
          } />

          {/* Private route for NGO dashboard */}
          <Route path="/ngo/dashboard/:ngoId" element={
            <NGOAuthProvider>
              <NGODashboard />
            </NGOAuthProvider>
          } />

          {/* Payment success and failure routes */}
          <Route path="/payment-success" element={<Layout><PaymentSuccess /></Layout>} />
          <Route path="/payment-fail" element={<Layout><PaymentFail /></Layout>} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<Layout><div>Page not found</div></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}