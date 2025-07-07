import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';

const PickUpPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState('');

  const fetchAds = () => {
    fetch('http://localhost:3000/api/all-ads')
      .then(async res => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Failed to fetch announcements');
        }
        return res.json();
      })
      .then(data => setAnnouncements(data))
      .catch(err => setError(err.message));
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const handleDetails = (id) => {
    const item = announcements.find(ann => ann.id === id);
    alert(`Details:\nArea: ${item.area}\nBottles: ${item.bottles}\nPhone: ${item.phone}`);
  };

  return (
    <div className="welcome-page">
      <h1 id="welcome-cap">Pick Up</h1>

      {error && <p>{error}</p>}

      <ul className="announcement-list">
        {announcements.map(item => (
          <li key={item.id} className="announcement-item">
            <span>{item.area} — Bottles: {item.bottles}</span>
            <button className="button" onClick={() => handleDetails(item.id)}>Details</button>
          </li>
        ))}
      </ul>

      <div>
        <BackButton />
      </div>
    </div>
  );
};

export default PickUpPage;