import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Dashboard = () => {
  const columns = [
    { field: 'name', headerName: 'Company Name', width: 150 },
    { field: 'lastCommunications', headerName: 'Last 5 Communications', width: 300 },
    { field: 'nextCommunication', headerName: 'Next Scheduled', width: 200 },
  ];

  const rows = [
    { id: 1, name: 'Company A', lastCommunications: 'Email, Call', nextCommunication: 'Visit - Dec 2' },
    // Add more rows
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Dashboard;
