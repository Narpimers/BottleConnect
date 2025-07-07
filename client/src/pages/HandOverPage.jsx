import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';

const HandOverPage = () => {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:3000/api/ads', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(async res => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Failed to fetch ads');
        }
        return res.json();
      })
      .then(data => {
        setAds(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  const handleDelete = (id) => {
    const token = localStorage.getItem('token');

    fetch(`http://localhost:3000/api/ads/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
      .then(async res => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Failed to delete ad');
        }

        setAds(prevAds => prevAds.filter(ad => ad.id !== id));
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <div className="welcome-page">
      <h1 id="welcome-cap">List of your ads</h1>

      {error && <p>{error}</p>}

      <ul className="announcement-list">
          {ads.length === 0 ? (
            <p>You have no ads yet</p>
          ) : (
            ads.map(item => (
              <li key={item.id} className="announcement-item">
                <span>
                  {item.area}, bottles: {item.bottles}
                </span>
                <button className="logout-button" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </li>
            ))
          )}
      </ul>

      <div className="add-button-container">
        <Link to="/add">
          <button className="button">Add</button>
        </Link>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
};

export default HandOverPage;