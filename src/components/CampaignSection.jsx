import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../Auth/firebaseConfig';
import { FaDonate } from 'react-icons/fa';

const CampaignSection = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'campaigns'));
        const campaignsData = await Promise.all(
          querySnapshot.docs.map(async (campaignDoc) => {
            const campaign = campaignDoc.data();
            const ngoDocRef = doc(db, 'ngoRegistrations', campaign.ngoId);
            const ngoDoc = await getDoc(ngoDocRef);
            const ngoData = ngoDoc.exists() ? ngoDoc.data() : {};
            return { id: campaignDoc.id, ...campaign, ngoName: ngoData.ngoName || 'Unknown NGO' };
          })
        );
        setCampaigns(campaignsData);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-green-600">Current Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{campaign.title}</h3>
              <p className="text-gray-600 mb-4">{campaign.reason}</p>
              <p className="text-gray-800 font-semibold">NGO: {campaign.ngoName}</p>
              <p className="text-gray-600">End Date: {new Date(campaign.endDate).toLocaleDateString()}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-gray-600">Total Collected:</p>
                  <h4 className="text-xl font-bold text-green-500">${campaign.donationCollected}</h4>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 transition-colors duration-300">
                  <FaDonate className="mr-2" /> Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;