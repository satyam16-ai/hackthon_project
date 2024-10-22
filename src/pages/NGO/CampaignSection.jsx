import React, { useState } from 'react';
import axios from 'axios';

const CampaignSection = ({ ngoId }) => {
  const [campaign, setCampaign] = useState({
    title: '',
    reason: '',
    endDate: ''
  });

  const handleChange = (e) => {
    setCampaign({
      ...campaign,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/ngos/campaigns', {
        ...campaign,
        ngoId
      });
      console.log('Campaign submitted:', response.data);
    } catch (error) {
      console.error('Error submitting campaign:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Raise a Fund Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Campaign Title</label>
          <input 
            type="text" 
            name="title"
            value={campaign.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Reason for Raising Funds</label>
          <textarea 
            name="reason"
            value={campaign.reason}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">End Date</label>
          <input 
            type="date"
            name="endDate"
            value={campaign.endDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit Campaign</button>
      </form>
    </div>
  );
};

export default CampaignSection;