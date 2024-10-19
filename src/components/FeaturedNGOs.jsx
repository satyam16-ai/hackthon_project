import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { db } from '../Auth/firebaseConfig';

const FeaturedNGOs = () => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    const fetchNGOs = async () => {
      try {
        const q = query(
          collection(db, 'ngoRegistrations'),
          where('status', '==', 'approved'), // Filter for approved NGOs
          limit(3)
        );
        const querySnapshot = await getDocs(q);
        const ngosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNgos(ngosData);
      } catch (error) {
        console.error('Error fetching NGOs:', error);
      }
    };

    fetchNGOs();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-8">
          Featured NGOs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ngos.map((ngo, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={ngo.logo || 'https://via.placeholder.com/150'}
                alt={`${ngo.ngoName} Logo`}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700">{ngo.ngoName}</h3>
              <p className="text-gray-600 mb-4">{ngo.workingSector}</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Donate Now
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700">
            View All NGOs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNGOs;