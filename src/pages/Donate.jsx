import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../Auth/firebaseConfig';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

const Donate = () => {
  const [ngos, setNgos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [filteredNgos, setFilteredNgos] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNGOs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'ngoRegistrations'));
        const ngosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNgos(ngosData);
        setFilteredNgos(ngosData);
      } catch (error) {
        console.error('Error fetching NGOs:', error);
      }
    };

    fetchNGOs();
  }, []);

  useEffect(() => {
    const filterNGOs = () => {
      let filtered = ngos;

      if (searchTerm) {
        filtered = filtered.filter(ngo =>
          ngo.ngoName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (category) {
        filtered = filtered.filter(ngo =>
          ngo.workingSector.toLowerCase().includes(category.toLowerCase())
        );
      }

      if (location) {
        filtered = filtered.filter(ngo =>
          ngo.city.toLowerCase().includes(location.toLowerCase())
        );
      }

      setFilteredNgos(filtered);
    };

    filterNGOs();
  }, [searchTerm, category, location, ngos]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleDonateNow = (ngoId) => {
    if (user) {
      navigate(`/payment/${ngoId}`);
    } else {
      navigate('/donor/login');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">Donate to NGOs</h1>

      <div className="flex justify-center mb-8">
        <div className="flex items-center border border-gray-300 rounded-lg p-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by NGO name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg p-2 ml-4">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="outline-none"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg p-2 ml-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none"
          >
            <option value="">All Categories</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="environment">Environment</option>
            <option value="animal welfare">Animal Welfare</option>
            <option value="human rights">Human Rights</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNgos.map((ngo) => (
          <div key={ngo.id} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">{ngo.ngoName}</h3>
            <p className="text-gray-600 mb-2"><strong>Sector:</strong> {ngo.workingSector}</p>
            <p className="text-gray-600 mb-2"><strong>Location:</strong> {ngo.city}, {ngo.country}</p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> {ngo.email}</p>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> {ngo.phoneNumber}</p>
            <button
              onClick={() => handleDonateNow(ngo.id)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Donate Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donate;