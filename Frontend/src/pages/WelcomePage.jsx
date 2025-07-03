import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className='welcome-page'>
      <h1 id='welcome-cap'>Welcome</h1>
      <div className='welcome-buttons'>
        <button
          className='button'
          onClick={() => navigate('/hand-over')}
        >
          Hand Over
        </button>
        <button
          className='button'
          onClick={() => navigate('/pickup-list')}
        >
          Pick Up
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;