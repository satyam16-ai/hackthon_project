import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Auth/firebaseConfig";
import { FaCheckCircle, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHandsHelping, FaHeartbeat, FaBook, FaTree, FaGraduationCap } from 'react-icons/fa'; // Import the icons

const NGOsPage = () => {
  const [ngos, setNgos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [workingSector, setWorkingSector] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchNGOs = async () => {
      try {
        const q = query(collection(db, 'ngoRegistrations'), where('status', '==', 'approved'));
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

  const getWorkingSectorIcon = (sector) => {
    switch (sector.toLowerCase()) {
      case 'health':
        return <FaHeartbeat className="mr-2" />;
      case 'education':
        return <FaBook className="mr-2" />;
      case 'environment':
        return <FaTree className="mr-2" />;
      case 'community development':
        return <FaHandsHelping className="mr-2" />;
      case 'youth development':
        return <FaGraduationCap className="mr-2" />;
      default:
        return <FaHandsHelping className="mr-2" />;
    }
  };

  const filteredNgos = ngos.filter(ngo => 
    ngo.ngoName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (location ? ngo.address.toLowerCase().includes(location.toLowerCase()) : true) &&
    (workingSector ? ngo.workingSector.toLowerCase().includes(workingSector.toLowerCase()) : true)
  );

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <h1 className="text-5xl font-bold text-center mb-10 text-green-600">Our NGOs</h1>
      <div className="flex justify-center mb-8 space-x-4">
        <input 
          type="text" 
          placeholder="Search NGOs..." 
          className="p-3 border border-gray-300 rounded-lg w-96 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          Filters
        </button>
      </div>
      {isFilterOpen && (
        <motion.div 
          className="flex justify-center mb-8 space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input 
            type="text" 
            placeholder="Location..." 
            className="p-3 border border-gray-300 rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Working Sector..." 
            className="p-3 border border-gray-300 rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={workingSector}
            onChange={(e) => setWorkingSector(e.target.value)}
          />
        </motion.div>
      )}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {filteredNgos.map(ngo => (
          <motion.div 
            key={ngo.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={ngo.logo || 'https://via.placeholder.com/150'} alt={ngo.ngoName} className="w-full h-48 object-cover" />
            <div className="p-6 relative">
              <h2 className="text-2xl font-bold mb-2 text-green-700 flex items-center">
                {ngo.ngoName}
                <span className="ml-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                  <FaCheckCircle className="mr-1" /> Verified
                </span>
              </h2>
              <p className="text-gray-600 mb-2">{ngo.description}</p>
              <p className="text-gray-600 mb-2 flex items-center"><FaMapMarkerAlt className="mr-2" /> {ngo.address}</p>
              <p className="text-gray-600 mb-2 flex items-center">{getWorkingSectorIcon(ngo.workingSector)} {ngo.workingSector}</p>
              {ngo.phoneNumber && (
                <p className="text-gray-600 mb-2 flex items-center"><FaPhoneAlt className="mr-2" /> {ngo.phoneNumber}</p>
              )}
              {ngo.email && (
                <p className="text-gray-600 mb-2 flex items-center"><FaEnvelope className="mr-2" /> {ngo.email}</p>
              )}
              <div className="flex justify-between items-center mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Learn More</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Donate</button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NGOsPage;