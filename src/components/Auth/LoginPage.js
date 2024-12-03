import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const lastUsedEmail = localStorage.getItem('lastUsedEmail');
    if (lastUsedEmail) {
      setEmail(lastUsedEmail);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    const user = usersData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('lastUsedEmail', email);

      // Redirect based on role
      navigate(user.role === 'admin' ? '/admin' : '/user');
    } else {
      alert('Invalid credentials! Please try again.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
