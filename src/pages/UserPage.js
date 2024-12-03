// src/pages/UserPage.js
import React, { useState } from 'react';

const UserPage = () => {
  const [view, setView] = useState('dashboard');

  return (
    <div>
      <h1>User Page</h1>
      <button onClick={() => setView('dashboard')}>Dashboard</button>
      <button onClick={() => setView('notifications')}>Notifications</button>
      <button onClick={() => setView('calendar')}>Calendar View</button>

      {view === 'dashboard' && <p>Dashboard Content Goes Here</p>}
      {view === 'notifications' && <p>Notifications Content Goes Here</p>}
      {view === 'calendar' && <p>Calendar Content Goes Here</p>}
    </div>
  );
};

export default UserPage;
