import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
  setDoc
} from "firebase/firestore";
import { db } from "../../Auth/firebaseConfig"; // Adjust import to your Firebase config file
import emailjs from "emailjs-com"; // Make sure you have installed emailjs
import { toast } from "react-toastify"; // Optional: For notifications on success or error
import { FaCalendarAlt,FaCheck, FaTimes, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIndustry, FaUniversity, FaGlobe, FaFlag, FaCity, FaIdCard, FaBank, FaKey, FaFileAlt, FaMoneyBillWave } from "react-icons/fa"; // Icons for details
import { generateUniqueToken } from '../../utils/tokenGenerator';

const AdminNGOVerification = () => {
  const [pendingNGOs, setPendingNGOs] = useState([]);

  // Fetch all pending NGOs from Firestore
  useEffect(() => {
    const fetchPendingNGOs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ngoRegistrations"));
        const pending = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPendingNGOs(pending);
      } catch (error) {
        console.error("Error fetching pending NGOs:", error);
      }
    };

    fetchPendingNGOs();
  }, []);

  // Approve NGO and send approval email
  const approveNGO = async (ngoId, ngoEmail) => {
    try {
      // Update status in Firebase
      await updateDoc(doc(db, 'ngoRegistrations', ngoId), {
        status: 'approved',
      });
  
      // Generate a unique token
      const token = generateUniqueToken();
  
      // Store the token in Firestore
      await setDoc(doc(db, 'ngoTokens', token), {
        ngoId,
        email: ngoEmail,
        createdAt: new Date(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Token expires in 24 hours
      });
  
      // Create the password setup link
      const setupLink = `http://localhost:3000/ngo/set-password/${token}`;
      console.log(setupLink);
      
  
      // Send approval email using Email.js
      const emailParams = {
        to_email: ngoEmail,
        subject: 'NGO Registration Approved',
        message: `Congratulations! Your NGO registration has been approved. Please set up your password using this link: ${setupLink}`,
      };
      
      const response = await emailjs.send(
        "service_5odwgbs",
        "template_dea9mnj",
        emailParams,
        "pJpsO6ROzxj-A5two"
      );
      
      if (response.status === 200) {
        console.log(`Email sent successfully to NGO: ${ngoEmail}`);
        toast.success('NGO approved and email sent!');
        
        // Update the state to reflect the approval
        setPendingNGOs((prevNGOs) =>
          prevNGOs.map((ngo) =>
            ngo.id === ngoId ? { ...ngo, status: "approved" } : ngo
          )
        );
      } else {
        console.warn(`Email sent with status: ${response.status}. Text: ${response.text}`);
        toast.warning('NGO approved, but there might be an issue with the email.');
      }
    } catch (error) {
      console.error('Error approving NGO:', error);
      toast.error('Failed to approve NGO.');
    }
  };

  // Reject NGO, delete from Firebase, and send rejection email
  const rejectNGO = async (ngoId, ngoEmail) => {
    try {
      // Send rejection email
      const emailParams = {
        to_email: ngoEmail,
        subject: "NGO Registration Rejected",
        message:
          "We regret to inform you that your NGO registration has been rejected.",
      };
      await emailjs.send(
        "service_5odwgbs",
        "template_dea9mnj",
        emailParams,
        "pJpsO6ROzxj-A5two"
      );

      // Delete NGO from Firebase after sending the email
      await deleteDoc(doc(db, "ngoRegistrations", ngoId));
      toast.success("NGO rejected and email sent!");

      // Remove the NGO from the state
      setPendingNGOs((prevNGOs) =>
        prevNGOs.filter((ngo) => ngo.id !== ngoId)
      );
    } catch (error) {
      console.error("Error rejecting NGO:", error);
      toast.error("Failed to reject NGO.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        Pending NGO Registrations
      </h2>

      {pendingNGOs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pendingNGOs.map((ngo) => (
            <div
              key={ngo.id}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${
                ngo.status === "approved" ? "border-2 border-green-500" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {ngo.ngoName}
              </h3>
              <p className="text-gray-600">
                <FaUser className="inline mr-2" /><strong>Director:</strong> {ngo.directorName}
                <br />
                <FaEnvelope className="inline mr-2" /><strong>Email:</strong> {ngo.email}
                <br />
                <FaPhone className="inline mr-2" /><strong>Phone:</strong> {ngo.phoneNumber}
                <br />
                <FaMapMarkerAlt className="inline mr-2" /><strong>Address:</strong> {ngo.address}, {ngo.city}, {ngo.state} - {ngo.postalCode}
                <br />
                <FaIndustry className="inline mr-2" /><strong>Working Sector:</strong> {ngo.workingSector}
                <br />
                <FaUniversity className="inline mr-2" /><strong>Bank Account:</strong> {ngo.bankAccount}
                <br />
                <FaKey className="inline mr-2" /><strong>IFSC Code:</strong> {ngo.ifscCode}
                <br />
                <FaFileAlt className="inline mr-2" /><strong>Registration Number:</strong> {ngo.registrationNumber}
                <br />
                <FaCalendarAlt className="inline mr-2" /><strong>Establishment Date:</strong> {ngo.establishmentDate}
                <br />
                <FaGlobe className="inline mr-2" /><strong>Website:</strong> {ngo.website}
                <br />
                <FaFlag className="inline mr-2" /><strong>Country:</strong> {ngo.country}
                <br />
                <FaIdCard className="inline mr-2" /><strong>PAN/TIN:</strong> {ngo.panTin}
                <br />
                <FaMoneyBillWave className="inline mr-2" /><strong>Funding Sources:</strong> {ngo.fundingSources}
              </p>
              <div className="mt-4">
                <strong>Documents:</strong>
                <ul className="list-disc list-inside">
                  {['registrationCertificate', 'constitution', 'bankProof', 'directorIdProof', 'financialReport', 'taxExemptionCert', 'logo'].map((field, index) => (
                    ngo[field] && (
                      <li key={index}>
                        <button
                          onClick={() => window.open(ngo[field], '_blank')}
                          className="text-blue-600 hover:underline"
                        >
                          <FaFileAlt className="inline mr-2" /> View {field.replace(/([A-Z])/g, ' $1')}
                        </button>
                      </li>
                    )
                  ))}
                </ul>
              </div>
              <div className="flex justify-between mt-4">
                {ngo.status !== "approved" && (
                  <>
                    <button
                      onClick={() => approveNGO(ngo.id, ngo.email)}
                      className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                    >
                      <FaCheck className="mr-2" /> Approve
                    </button>
                    <button
                      onClick={() => rejectNGO(ngo.id, ngo.email)}
                      className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                    >
                      <FaTimes className="mr-2" /> Reject
                    </button>
                  </>
                )}
              </div>
              {ngo.status === "approved" && (
                <p className="text-green-600 mt-4">Approved</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No pending registrations.</p>
      )}
    </div>
  );
};

export default AdminNGOVerification;