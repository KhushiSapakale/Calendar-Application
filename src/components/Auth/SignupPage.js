import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    const userExists = usersData.some((user) => user.email === email);

    if (userExists) {
      alert('Email is already registered! Please use a different email.');
      return;
    }

    const newUser = { email, password, role };
    usersData.push(newUser);
    localStorage.setItem('usersData', JSON.stringify(usersData));

    localStorage.setItem('userRole', role);
    localStorage.setItem('lastUsedEmail', email);

    // Redirect based on role
    navigate(role === 'admin' ? '/admin' : '/user');
  };

  return (
    <div className="sign-up-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
