import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetchAds';

const AddPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    area: '',
    bottles: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMessage('You must be logged in to add an ad.');
      return;
    }

    const payload = {
      ...formData,
      token,
    };

    try {
      const response = await fetch('http://localhost:3000/api/ads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Failed to add ad');
      }

      navigate('/hand-over');
    } catch (error) {
      console.error('Add ad error:', error);
      setErrorMessage(error.message || 'Error adding ad');
    }
  };

  return (
    <div className="registration-wrapper">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add Ad</h2>

        <input
          type="text"
          name="area"
          placeholder="Area"
          value={formData.area}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="bottles"
          placeholder="Number of bottles"
          value={formData.bottles}
          onChange={handleChange}
          required
        />

        <button type="submit" className="button">Submit</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AddPage;