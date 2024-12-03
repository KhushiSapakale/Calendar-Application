import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import LoginPage from './components/Auth/LoginPage';
import SignUpPage from './components/Auth/SignupPage';
import LandingPage from './components/Auth/LandingPage';

const App = () => {
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));

  useEffect(() => {
    const handleStorageChange = () => {
      const role = localStorage.getItem('userRole');
      setUserRole(role);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* Explicit role-specific routing */}
          <Route
            path="/admin"
            element={
              userRole === 'admin' ? (
                <AdminPage />
              ) : userRole === 'user' ? (
                <Navigate to="/user" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/user"
            element={
              userRole === 'user' ? (
                <UserPage />
              ) : userRole === 'admin' ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
