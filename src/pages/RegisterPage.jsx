import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    phone: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };



 return (
    <div className="registration-wrapper">
      <form className="registration-form">
        <h2 className="form-title">Register</h2>
        <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="area" placeholder="Your area" value={formData.area} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;