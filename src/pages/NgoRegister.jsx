import React, { useState } from 'react';
import { FaUpload, FaCheckCircle } from 'react-icons/fa';

const NGORegister = () => {
  const [formData, setFormData] = useState({
    ngoName: '',
    registrationNumber: '',
    establishmentDate: '',
    email: '',
    phoneNumber: '',
    website: '',
    address: '',
    country: '',
    city: '',
    directorName: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    panTin: '',
    fundingSources: '',
    registrationCertificate: null,
    constitution: null,
    bankProof: null,
    directorIdProof: null,
    financialReport: null,
    taxExemptionCert: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submit logic here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">NGO Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Basic NGO Information */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Basic Information</h3>
          {['ngoName', 'registrationNumber', 'establishmentDate', 'email', 'phoneNumber', 'website'].map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{field.replace(/([A-Z])/g, ' $1')}*</label>
              <input
                type={field === 'establishmentDate' ? 'date' : field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          ))}
        </div>

        {/* Section 2: Address Information */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Address Information</h3>
          {['address', 'country', 'city'].map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}*</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          ))}
        </div>

        {/* Section 3: Director & Legal Information */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Director & Legal Information</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Director/President Name*</label>
            <input
              type="text"
              name="directorName"
              value={formData.directorName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Upload Director ID Proof*</label>
            <div className="flex items-center">
              <FaUpload className="mr-2 text-green-500" />
              <input
                type="file"
                name="directorIdProof"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
              {formData.directorIdProof && <FaCheckCircle className="text-green-500 ml-2" />}
            </div>
          </div>
        </div>

        {/* Section 4: Financial Information */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Financial Information</h3>
          {['bankName', 'accountNumber', 'ifscCode', 'panTin'].map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}*</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Upload Bank Proof*</label>
            <div className="flex items-center">
              <FaUpload className="mr-2 text-green-500" />
              <input
                type="file"
                name="bankProof"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
              {formData.bankProof && <FaCheckCircle className="text-green-500 ml-2" />}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Upload Latest Financial Report*</label>
            <div className="flex items-center">
              <FaUpload className="mr-2 text-green-500" />
              <input
                type="file"
                name="financialReport"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
              {formData.financialReport && <FaCheckCircle className="text-green-500 ml-2" />}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Funding Sources (optional)</label>
            <textarea
              name="fundingSources"
              value={formData.fundingSources}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>
        </div>

        {/* Section 5: Document Uploads */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Document Uploads</h3>
          {['registrationCertificate', 'constitution', 'taxExemptionCert'].map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Upload {field.charAt(0).toUpperCase() + field.slice(1)}*</label>
              <div className="flex items-center">
                <FaUpload className="mr-2 text-green-500" />
                <input
                  type="file"
                  name={field}
                  onChange={handleFileChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
                {formData[field] && <FaCheckCircle className="text-green-500 ml-2" />}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200">
            Submit NGO Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default NGORegister;
