import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // State to track token validation
  const navigate = useNavigate();
  const location = useLocation();

  // The static admin token
  const adminToken = 'secure_admin_token';

  // Get the token from the URL query params
  const token = new URLSearchParams(location.search).get('admin_token');

  useEffect(() => {
    // Simulate async token check (you can customize this for actual async token check later)
    setTimeout(() => {
      if (!token || token !== adminToken) {
        navigate('/'); // Redirect to homepage if token is invalid
      } else {
        setLoading(false); // Token is valid, stop loading
      }
    }, 500); // Delay for smooth loading experience (500ms for demonstration)
  }, [token, adminToken, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check hardcoded credentials (for now)
    if (email === 'admin@example.com' && password === 'password') {
      localStorage.setItem('adminEmail', email);
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  // Render nothing or loading spinner until token validation is complete
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p> {/* You can replace this with a loading spinner */}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleLogin}>
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
