// src/components/Auth/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="landing-page">
      <h2>Welcome to the Calendar App</h2>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignUpClick}>Sign Up</button>
    </div>
  );
};

export default LandingPage;
