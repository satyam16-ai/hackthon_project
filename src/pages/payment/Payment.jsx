import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { FaCreditCard, FaPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa';
import './payment.css'; // Import the CSS for animations
import upiIcon from '../../assets/upi-icon.svg'; // Import the UPI icon SVG

const Payment = () => {
  const { ngoId } = useParams(); // Get the NGO ID from the URL parameters
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setShowSuccess(true);
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter donation amount"
              required
            />
          </div>

          {paymentMethod === 'creditCard' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name on Card</label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter name on card"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter card number"
                  required
                />
              </div>
              <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Expiry Date</label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="CVV"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {paymentMethod === 'paypal' && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">PayPal Email</label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter PayPal email"
                required
              />
            </div>
          )}

          {paymentMethod === 'applePay' && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Apple Pay ID</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Apple Pay ID"
                required
              />
            </div>
          )}

          {paymentMethod === 'googlePay' && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Google Pay ID</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Google Pay ID"
                required
              />
            </div>
          )}

          {paymentMethod === 'upi' && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">UPI ID</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter UPI ID"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Payment Method</label>
            <div className="flex space-x-4">
              <button
                type="button"
                className={`p-4 border rounded-lg flex items-center justify-center transition-all ${
                  paymentMethod === 'creditCard' ? 'border-green-600' : 'border-gray-300'
                }`}
                onClick={() => setPaymentMethod('creditCard')}
              >
                <FaCreditCard className="text-2xl" />
              </button>
              <button
                type="button"
                className={`p-4 border rounded-lg flex items-center justify-center transition-all ${
                  paymentMethod === 'paypal' ? 'border-green-600' : 'border-gray-300'
                }`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <FaPaypal className="text-2xl" />
              </button>
              <button
                type="button"
                className={`p-4 border rounded-lg flex items-center justify-center transition-all ${
                  paymentMethod === 'applePay' ? 'border-green-600' : 'border-gray-300'
                }`}
                onClick={() => setPaymentMethod('applePay')}
              >
                <FaApplePay className="text-2xl" />
              </button>
              <button
                type="button"
                className={`p-4 border rounded-lg flex items-center justify-center transition-all ${
                  paymentMethod === 'googlePay' ? 'border-green-600' : 'border-gray-300'
                }`}
                onClick={() => setPaymentMethod('googlePay')}
              >
                <FaGooglePay className="text-2xl" />
              </button>
              <button
                type="button"
                className={`p-4 border rounded-lg flex items-center justify-center transition-all ${
                  paymentMethod === 'upi' ? 'border-green-600' : 'border-gray-300'
                }`}
                onClick={() => setPaymentMethod('upi')}
              >
                <img src={upiIcon} alt="UPI" className="h-8" />
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