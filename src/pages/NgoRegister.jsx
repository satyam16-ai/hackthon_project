import React, { useState } from 'react';
import { FaUpload, FaCheckCircle } from 'react-icons/fa';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore methods
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Auth methods
import { db } from '../Auth/firebaseConfig';
import {  useNavigate } from "react-router-dom";
const storage = getStorage();
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
    workingSector: '',
    logo: null,
    password: '', // Add password field
    confirmPassword: '', // Add confirm password field
  });

  const [logoPreview, setLogoPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // Add show password state
  const nevigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [e.target.name]: file });

    if (e.target.name === 'logo' && file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Prepare data for submission
      const pendingData = {
        ...formData,
        status: 'pending', // Add status field for admin approval
        uid: user.uid, // Add user UID to the data
      };

      // Upload files to Firebase Storage
      const fileUploadPromises = [];
      const fileFields = ['registrationCertificate', 'constitution', 'bankProof', 'directorIdProof', 'financialReport', 'taxExemptionCert', 'logo'];

      fileFields.forEach((field) => {
        if (formData[field]) {
          const fileRef = ref(storage, `${field}/${formData[field].name}`);
          fileUploadPromises.push(uploadBytes(fileRef, formData[field]));
        }
      });

      const uploadResults = await Promise.all(fileUploadPromises);
      const fileUrls = await Promise.all(uploadResults.map((result) => getDownloadURL(result.ref)));

      // Update pendingData with file URLs
      fileFields.forEach((field, index) => {
        if (formData[field]) {
          pendingData[field] = fileUrls[index];
        }
      });

      // Save the data to Firestore
      const docRef = await addDoc(collection(db, 'ngoRegistrations'), pendingData);
      console.log('Document written with ID: ', docRef.id);

      // Reset form or show success message here
      setFormData({
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
        workingSector: '',
        logo: null,
        password: '', // Reset password field
        confirmPassword: '', // Reset confirm password field
      });
      setLogoPreview(null); // Clear the logo preview

      nevigate('/NGO-register-success');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error registering NGO: " + error.message);
    }
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
          {/* Add password field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password*</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          {/* Add confirm password field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirm Password*</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          {/* Add show password toggle */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              className="mr-2"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword" className="text-gray-700 font-medium">
              Show Password
            </label>
          </div>
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

        {/* Section 6: Working Sector */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Working Sector</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Working Sector*</label>
            <input
              type="text"
              name="workingSector"
              value={formData.workingSector}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Section 7: Logo Upload */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Upload Logo</h3>
          <div className="flex items-center">
            <FaUpload className="mr-2 text-green-500" />
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          {logoPreview && (
            <div className="mt-4">
              <img src={logoPreview} alt="Logo Preview" className="w-32 h-32 object-cover rounded-md shadow-md" />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default NGORegister;