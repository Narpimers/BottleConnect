import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const WelcomePage = () => {
  const { isLogin } = useContext(AuthContext);

  return (
    <div className="welcome-page">
      <h2>
        Welcome to <span id="logo-text">Bottle Connect</span>
      </h2>

      {isLogin ? (
        <>
          <p className="hello-text">
            Great to see you back! What would you like to do today?
          </p>
          <p>
            <Link to="/hand-over" className="link">Hand Over</Link> or&nbsp;
            <Link to="/pick-up" className="link">Pick Up</Link>
          </p>
        </>
      ) : (
        <>
          <p className="hello-text">
            Hello! This site helps people give away or collect bottles to keep the planet clean.  
            If you’ve got bottles to hand over or want to pick some up — you're in the right place!
          </p>

          <p>
            To get started&nbsp;
            <Link to="/login" className="link">Log in</Link> or&nbsp;
            <Link to="/register" className="link">Sign up</Link> 
          </p>
        </>
      )}
    </div>
  );
};

export default WelcomePage;