import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../Auth/firebaseConfig';
import { FaCheck, FaTimes, FaFileAlt, FaMoneyBillWave } from 'react-icons/fa';

const AdminNGOVerification = () => {
  const [pendingNGOs, setPendingNGOs] = useState([]);
  const [fundRequests, setFundRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPendingNGOs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'ngoRegistrations'));
        const pending = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((ngo) => ngo.status === 'pending'); // Filter for pending NGOs
        setPendingNGOs(pending);
      } catch (error) {
        console.error('Error fetching pending NGOs:', error);
      }
    };

    const fetchFundRequests = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'fundRequests'));
        const requests = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFundRequests(requests);
      } catch (error) {
        console.error('Error fetching fund requests:', error);
      }
    };

    fetchPendingNGOs();
    fetchFundRequests();
  }, []);

  const handleApprove = async (ngoId) => {
    try {
      const ngoRef = doc(db, 'ngoRegistrations', ngoId);
      await updateDoc(ngoRef, { status: 'approved' });
      setPendingNGOs(pendingNGOs.filter((ngo) => ngo.id !== ngoId)); // Remove approved NGO from pending list
    } catch (error) {
      console.error('Error approving NGO:', error);
    }
  };

  const handleReject = async (ngoId) => {
    try {
      const ngoRef = doc(db, 'ngoRegistrations', ngoId);
      await updateDoc(ngoRef, { status: 'rejected' });
      setPendingNGOs(pendingNGOs.filter((ngo) => ngo.id !== ngoId)); // Remove rejected NGO from pending list
    } catch (error) {
      console.error('Error rejecting NGO:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        Pending NGO Registrations
      </h2>
      <button
        onClick={() => navigate('/admin/approved-ngos')}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 mb-6"
      >
        View Approved NGOs
      </button>
      {pendingNGOs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pendingNGOs.map((ngo) => (
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
                <br />
                <FaMoneyBillWave className="inline mr-2" /><strong>Funding Sources:</strong> {ngo.fundingSources}
                <br />
                <FaMoneyBillWave className="inline mr-2" /><strong>Requested Amount:</strong> {ngo.amount}
              </p>
              <div className="mt-4">
                <strong>Work Proof:</strong>
                <ul className="list-disc list-inside">
                  {ngo.proofFile && (
                    <li>
                      <button
                        onClick={() => window.open(ngo.proofFile, '_blank')}
                        className="text-blue-600 hover:underline"
                      >
                        <FaFileAlt className="inline mr-2" /> View Work Proof
                      </button>
                    </li>
                  )}
                </ul>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleApprove(ngo.id)}
                  className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                >
                  <FaCheck className="mr-2" /> Approve
                </button>
                <button
                  onClick={() => handleReject(ngo.id)}
                  className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  <FaTimes className="mr-2" /> Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No pending registrations.</p>
      )}

      <h2 className="text-4xl font-bold text-center text-green-700 mb-8 mt-12">
        Fund Requests
      </h2>
      {fundRequests.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fundRequests.map((request) => (
            <div
              key={request.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {request.ngoName}
              </h3>
              <p className="text-gray-600">
                <strong>Requested Amount:</strong> {request.amount}
                <br />
                <strong>Reason:</strong> {request.reason}
              </p>
              <div className="mt-4">
                <strong>Work Proof:</strong>
                <ul className="list-disc list-inside">
                  {request.proofFile && (
                    <li>
                      <button
                        onClick={() => window.open(request.proofFile, '_blank')}
                        className="text-blue-600 hover:underline"
                      >
                        <FaFileAlt className="inline mr-2" /> View Work Proof
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No fund requests.</p>
      )}
    </div>
  );
};

export default AdminNGOVerification;