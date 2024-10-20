import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../Auth/firebaseConfig';

const Impact = () => {
  const [peopleHelped, setPeopleHelped] = useState(0);
  const [fundsRaised, setFundsRaised] = useState(0);
  const [ngosSupported, setNgosSupported] = useState(0);
  const [donors, setDonors] = useState(0);

  useEffect(() => {
    const fetchImpactData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'impactData'));
        let totalPeopleHelped = 0;
        let totalFundsRaised = 0;
        let totalDonors = 0;

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          totalPeopleHelped += data.peopleHelped || 0;
          totalFundsRaised += data.fundsRaised || 0;
          totalDonors += data.donors || 0;
        });

        setPeopleHelped(totalPeopleHelped);
        setFundsRaised(totalFundsRaised);
        setDonors(totalDonors);
      } catch (error) {
        console.error('Error fetching impact data:', error);
      }
    };

    const fetchSummaryData = async () => {
      try {
        const docRef = doc(db, 'summaryData', 'summary');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setNgosSupported(data.totalApprovedNGOs || 0);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching summary data:', error);
      }
    };

    fetchImpactData();
    fetchSummaryData();
  }, []);

  return (
    <div id="impact" className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">Our Impact</h1>

      {/* Stats Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600">{ngosSupported.toLocaleString()}</h2>
            <p className="text-gray-700">NGOs Supported</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600">{donors.toLocaleString()}</h2>
            <p className="text-gray-700">Donors</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600">{peopleHelped.toLocaleString()}</h2>
            <p className="text-gray-700">People Helped</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600">${(fundsRaised / 1e6).toFixed(2)} Million+</h2>
            <p className="text-gray-700">Funds Raised</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;  