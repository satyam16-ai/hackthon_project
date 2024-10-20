import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db, auth } from '../Auth/firebaseConfig';
import { FaSearch, FaMapMarkerAlt, FaDonate, FaClipboardList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

const Donate = () => {
  const [ngos, setNgos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [filteredNgos, setFilteredNgos] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedNgo, setSelectedNgo] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [requestMessage, setRequestMessage] = useState('');
  const [ngoSearchTerm, setNgoSearchTerm] = useState('');
  const [requestForAllNearby, setRequestForAllNearby] = useState(false);
  const [filteredRequestNgos, setFilteredRequestNgos] = useState([]);
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
        setFilteredRequestNgos(ngosData);
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

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/donor/login');
      return;
    }

    try {
      await addDoc(collection(db, 'requests'), {
        userId: user.uid,
        selectedNgo: requestForAllNearby ? 'All Nearby NGOs' : selectedNgo,
        selectedItems,
        requestMessage,
        location,
        createdAt: new Date(),
      });
      alert('Request submitted successfully!');
      setSelectedNgo('');
      setSelectedItems([]);
      setRequestMessage('');
      setNgoSearchTerm('');
      setRequestForAllNearby(false);
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Error submitting request. Please try again.');
    }
  };

  const handleItemChange = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(item)
        ? prevItems.filter((i) => i !== item)
        : [...prevItems, item]
    );
  };

  const handleNgoSearch = (e) => {
    setNgoSearchTerm(e.target.value);
    const filtered = ngos.filter(ngo =>
      ngo.ngoName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredRequestNgos(filtered);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">Donate to NGOs</h1>

      <div className="flex flex-col md:flex-row justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full md:w-auto">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by NGO name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none w-full"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full md:w-auto">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="outline-none w-full"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full md:w-auto">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full"
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
            <img
              src={ngo.logo || 'https://via.placeholder.com/150'}
              alt={`${ngo.ngoName} logo`}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">{ngo.ngoName}</h3>
            <p className="text-gray-600 mb-2"><strong>Sector:</strong> {ngo.workingSector}</p>
            <p className="text-gray-600 mb-2"><strong>Location:</strong> {ngo.city}, {ngo.country}</p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> {ngo.email}</p>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> {ngo.phoneNumber}</p>
            <button
              onClick={() => handleDonateNow(ngo.id)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center justify-center space-x-2"
            >
              <FaDonate />
              <span>Donate Now</span>
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-green-600 mt-12 mb-8 text-center">Raise a Request</h2>

      <form onSubmit={handleRequestSubmit} className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Search NGO</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by NGO name"
              value={ngoSearchTerm}
              onChange={handleNgoSearch}
              className="outline-none w-full"
              disabled={requestForAllNearby}
            />
          </div>
        </div>

        {!requestForAllNearby && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Select NGO</label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRequestNgos.map((ngo) => (
                <label key={ngo.id} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="selectedNgo"
                    value={ngo.id}
                    checked={selectedNgo === ngo.id}
                    onChange={() => setSelectedNgo(ngo.id)}
                    className="form-radio h-5 w-5 text-green-600"
                  />
                  <span className="text-gray-700">{ngo.ngoName}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select Items</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Blankets', 'Clothes', 'Food Supplies', 'Books', 'Toys'].map((item) => (
              <label key={item} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={item}
                  checked={selectedItems.includes(item)}
                  onChange={() => handleItemChange(item)}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
                <span className="text-gray-700">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            value={requestMessage}
            onChange={(e) => setRequestMessage(e.target.value)}
            className="outline-none w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={requestForAllNearby}
              onChange={() => setRequestForAllNearby(!requestForAllNearby)}
              className="form-checkbox h-5 w-5 text-green-600"
            />
            <span className="text-gray-700">Raise request for all nearby NGOs</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center justify-center space-x-2"
        >
          <FaClipboardList />
          <span>Submit Request</span>
        </button>
      </form>
    </div>
  );
};

export default Donate;