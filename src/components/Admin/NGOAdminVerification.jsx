import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const NGOAdminVerification = ({ ngoName }) => {
  const [formData, setFormData] = useState({
    ngoName: ngoName,
    registrationNumber: '123456789',
    establishmentDate: '2010-05-15',
    email: 'ngo@example.com',
    phoneNumber: '9876543210',
    website: 'https://www.ngo.org',
    address: '123 NGO Street, City, Country',
    country: 'Country Name',
    city: 'City Name',
    directorName: 'John Doe',
    bankName: 'Bank ABC',
    accountNumber: '9876543210',
    ifscCode: 'ABCD0123456',
    panTin: 'ABCDE1234F',
    fundingSources: 'Government Grants, Private Donations',
    registrationCertificate: 'certificate.pdf',
    constitution: 'constitution.pdf',
    bankProof: 'bankproof.pdf',
    directorIdProof: 'idproof.pdf',
    financialReport: 'financialreport.pdf',
    taxExemptionCert: 'taxexemption.pdf',
    workingSector: 'Education',
    logo: 'logo.png',
  });

  const handleVerifyField = (field) => {
    console.log(`Verified ${field}`);
    // Add logic to mark the field as verified (e.g., update backend or state)
  };

  const handleRejectField = (field) => {
    console.log(`Rejected ${field}`);
    // Add logic to mark the field as rejected
  };

  const handleApproveNGO = () => {
    console.log('NGO Approved');
    // Add logic for overall NGO approval
  };

  const handleRejectNGO = () => {
    console.log('NGO Rejected');
    // Add logic for overall NGO rejection
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Pending NGO Verification</h2>

      {/* Section for NGO Info */}
      <div className="space-y-4">
        {Object.keys(formData).map((field, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              {field === 'logo' ? (
                <img src={formData[field]} alt="Logo" className="w-24 h-24 object-cover mt-2" />
              ) : (
                <p className="mt-1 text-gray-800">{formData[field]}</p>
              )}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleVerifyField(field)}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md"
              >
                <FaCheckCircle /> Verify
              </button>
              <button
                onClick={() => handleRejectField(field)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
              >
                <FaTimesCircle /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Approve/Reject Entire NGO */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handleApproveNGO}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg"
        >
          Approve NGO
        </button>
        <button
          onClick={handleRejectNGO}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg"
        >
          Reject NGO
        </button>
      </div>
    </div>
  );
};

export default NGOAdminVerification;
