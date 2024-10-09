import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userslice';
import { useNavigate } from 'react-router-dom'; // Path ko aapke project ke hisaab se adjust karein

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aapko yahaan login API call karni hogi
    dispatch(login({ email: formData.email }));
    navigate("/") // Simulate login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-300 p-2 rounded mb-4 w-full"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border border-gray-300 p-2 rounded mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
