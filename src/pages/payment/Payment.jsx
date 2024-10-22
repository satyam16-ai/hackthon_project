import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { FaPaypal } from 'react-icons/fa';
import './payment.css'; // Import the CSS for animations
import axios from 'axios';

const Payment = () => {
  const { ngoId } = useParams(); // Get the NGO ID from the URL parameters
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    const formattedAmount = parseFloat(amount).toFixed(2); // Ensure amount is formatted to two decimal places

    try {
      const response = await axios.post('http://localhost:5000/api/payments/initiate-payment', {
        donorId: 'donor-id', // Replace with actual donor ID
        ngoId,
        amount: formattedAmount,
        description,
      });

      // Redirect to PayPal approval URL
      window.location.href = response.data.approvalUrl;
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  useEffect(() => {
    // You can use the ngoId to fetch NGO details if needed
    console.log('NGO ID:', ngoId);
  }, [ngoId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Payment</h2>
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Donation Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter donation amount"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter description"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Payment Method</label>
            <div className="flex space-x-4">
              <button
                type="button"
                className={`p-4 border rounded-lg flex items-center justify-center transition-all ${
                  paymentMethod === 'paypal' ? 'border-green-600' : 'border-gray-300'
                }`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <FaPaypal className="text-2xl" />
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-700 transition-all"
          >
            Pay Now
          </button>
        </form>
        <CSSTransition in={showSuccess} timeout={300} classNames="fade" unmountOnExit>
          <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <p className="text-center">Payment Successful!</p>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Payment;