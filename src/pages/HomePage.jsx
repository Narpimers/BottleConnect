import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const WelcomePage = () => {
  const { isLogin } = useContext(AuthContext);

  return (
    <div className="welcome-page" style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>
        Welcome to <span id="logo-text" style={{ color: '#4caf50' }}>Bottle Connect</span>
      </h2>

      {!isLogin && (
        <>
          <p className="hello-text">
            Hello! This site helps people give away or collect bottles to keep the planet clean.  
            If you’ve got bottles to hand over or want to pick some up — you're in the right place!
          </p>

          <p>
            To get started&nbsp;
            <Link to="/register" className="link">Sign up</Link> or&nbsp;
            <Link to="/login" className="link">Log in</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default WelcomePage;