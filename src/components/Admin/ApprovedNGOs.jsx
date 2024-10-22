import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Auth/firebaseConfig';

const ApprovedNGOs = () => {
  const [approvedNGOs, setApprovedNGOs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApprovedNGOs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'ngoRegistrations'));
        const approved = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((ngo) => ngo.status === 'approved');
        setApprovedNGOs(approved);
      } catch (error) {
        console.error('Error fetching approved NGOs:', error);
      }
    };

    fetchApprovedNGOs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        Approved NGOs
      </h2>
      <button
        onClick={() => navigate('/admin/dashboard')}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 mb-6"
      >
        Back to Dashboard
      </button>
      {approvedNGOs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedNGOs.map((ngo) => (
            <div
              key={ngo.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {ngo.ngoName}
              </h3>
              <p className="text-gray-600">
                <strong>Director:</strong> {ngo.directorName}
                <br />
                <strong>Email:</strong> {ngo.email}
                <br />
                <strong>Phone:</strong> {ngo.phoneNumber}
              </p>
              <div className="mt-4">
                <Link
                  to={`/admin/ngo-details/${ngo.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No approved NGOs.</p>
      )}
    </div>
  );
};

export default ApprovedNGOs;