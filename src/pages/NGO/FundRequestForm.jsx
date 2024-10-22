import React, { useState } from 'react';
import axios from 'axios';

const FundRequestForm = ({ ngoId }) => {
  const [proofFile, setProofFile] = useState(null);
  const [amount, setAmount] = useState('');

  const handleFileChange = (e) => {
    setProofFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('proofFile', proofFile);
    formData.append('ngoId', ngoId);
    formData.append('amount', amount);

    try {
      const response = await axios.post('http://localhost:5000/api/payments/submit-proof', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Fund release request submitted:', response.data);
    } catch (error) {
      console.error('Error submitting fund release request:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Request Fund Release</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mb-4 w-full border border-gray-300 p-2 rounded"
          required
        />
        <label className="block mb-2">Upload Work Proof (PDF/Image)</label>
        <input type="file" accept="image/*,.pdf" onChange={handleFileChange} className="mb-4" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Request</button>
      </form>
    </div>
  );
};

export default FundRequestForm;