import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DonationTable from './DonationTable';
import FundRequestForm from './FundRequestForm';
import CampaignSection from './CampaignSection';
import Sidebar from './Sidebar';
import HeaderNGO from './HeaderNGO';
import axios from 'axios';
import { useNGOAuth } from '../../contexts/NGOAuthContext';

const NGODashboard = () => {
  const { ngoId } = useParams();
  const { currentNGO } = useNGOAuth();
  const [ngoData, setNgoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNgoData = async () => {
      try {
        console.log('Fetching NGO data for user:', ngoId);
        const response = await axios.get(`http://localhost:5000/api/ngos/${ngoId}`);
        console.log('NGO data fetched:', response.data);
        setNgoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching NGO data:', error);
        setLoading(false);
      }
    };

    fetchNgoData();
  }, [ngoId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!ngoData) {
    return <div>No data available</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <HeaderNGO ngoName={ngoData.ngoName} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <DonationTable donations={ngoData.donations || []} />
          <FundRequestForm ngoId={ngoId} />
        </div>
        <div className="mt-8">
          <CampaignSection ngoId={ngoId} />
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;