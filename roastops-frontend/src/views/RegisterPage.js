import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/register', {
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation
      });

      if (response.status === 201 || response.status === 200) {
        setSuccess("Registration successful! Redirecting to login...");
        setError('');
        setTimeout(() => navigate('/login'), 1500);
      }
    } catch (err) {
      setError("Registration failed. " + (err.response?.data?.message || ""));
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required />
        </div>
        <div>
          <label>Confirm Password:</label><br />
          <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            required />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
