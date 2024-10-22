import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Auth/firebaseConfig';
import { FaFileAlt } from 'react-icons/fa';


const NGODetails = () => {
  const { ngoId } = useParams();
  const [ngo, setNgo] = useState(null);

  useEffect(() => {
    const fetchNGODetails = async () => {
      try {
        const ngoRef = doc(db, 'ngoRegistrations', ngoId);
        const ngoDoc = await getDoc(ngoRef);
        if (ngoDoc.exists()) {
          setNgo(ngoDoc.data());
        } else {
          console.error('No such NGO!');
        }
      } catch (error) {
        console.error('Error fetching NGO details:', error);
      }
    };

    fetchNGODetails();
  }, [ngoId]);

  if (!ngo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        NGO Details
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          {ngo.ngoName}
        </h3>
        <p className="text-gray-600">
          <strong>Director:</strong> {ngo.directorName}
          <br />
          <strong>Email:</strong> {ngo.email}
          <br />
          <strong>Phone:</strong> {ngo.phoneNumber}
          <br />
          <strong>Address:</strong> {ngo.address}, {ngo.city}, {ngo.state} - {ngo.postalCode}
          <br />
          <strong>Working Sector:</strong> {ngo.workingSector}
          <br />
          <strong>Bank Account:</strong> {ngo.bankAccount}
          <br />
          <strong>IFSC Code:</strong> {ngo.ifscCode}
          <br />
          <strong>Registration Number:</strong> {ngo.registrationNumber}
          <br />
          <strong>Establishment Date:</strong> {ngo.establishmentDate}
          <br />
          <strong>Website:</strong> {ngo.website}
          <br />
          <strong>Country:</strong> {ngo.country}
          <br />
          <strong>PAN/TIN:</strong> {ngo.panTin}
          <br />
          <strong>Funding Sources:</strong> {ngo.fundingSources}
        </p>
        <div className="mt-4">
          <strong>Documents:</strong>
          <ul className="list-disc list-inside">
            {['registrationCertificate', 'constitution', 'bankProof', 'directorIdProof', 'financialReport', 'taxExemptionCert', 'logo'].map((field, index) => (
              ngo[field] && (
                <li key={index}>
                  <button
                    onClick={() => window.open(ngo[field], '_blank')}
                    className="text-blue-600 hover:underline"
                  >
                    <FaFileAlt className="inline mr-2" /> View {field.replace(/([A-Z])/g, ' $1')}
                  </button>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NGODetails;