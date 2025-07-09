import React from 'react';
import BackButton from '../components/BackButton';
import useFetch from '../hooks/useFetchAds';

const PickUpPage = () => {
  const { data: announcements, error, loading } = useFetch('http://localhost:3000/api/all-ads');

  const handleDetails = (id) => {
    const item = announcements.find(ann => ann.id === id);
    alert(`Details:\nArea: ${item.area}\nBottles: ${item.bottles}\nPhone: ${item.phone}`);
  };

  return (
    <div className="welcome-page">
      <h1 id="welcome-cap">Pick Up</h1>

      {loading && <p>Loading...</p>}
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