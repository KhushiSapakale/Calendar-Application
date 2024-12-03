import React, { useState } from 'react';
import AddCompany from '../components/AdminModule/AddCompany';
import ManageCommunications from '../components/AdminModule/ManageCommunications';

const AdminPage = () => {
  const [view, setView] = useState('dashboard'); // Set default view to 'dashboard'
  const [companies, setCompanies] = useState([]); // State to store companies
  const [communicationMethods, setCommunicationMethods] = useState([]); // Communication methods state

  // Function to add a company
  const addCompany = (newCompany) => {
    setCompanies([...companies, newCompany]);
  };

  // Function to edit a company
  const editCompany = (updatedCompany, index) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index] = updatedCompany;
    setCompanies(updatedCompanies);
  };

  // Function to delete a company
  const deleteCompany = (index) => {
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);
  };

  // Function to add a communication method
  const addMethod = (newMethod) => {
    setCommunicationMethods([...communicationMethods, newMethod]);
  };

  // Function to delete a communication method
  const deleteMethod = (name) => {
    const updatedMethods = communicationMethods.filter((method) => method.name !== name);
    setCommunicationMethods(updatedMethods);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <nav>
        <button onClick={() => setView('dashboard')}>Dashboard/Home</button>
        <button onClick={() => setView('addCompany')}>Add Company</button>
        <button onClick={() => setView('manageCommunication')}>Manage Communication Methods</button>
        <button onClick={() => alert('Logged out!')}>Logout</button> {/* You can replace this with actual logout logic */}
      </nav>

      {/* Conditional rendering based on the view */}
      {view === 'dashboard' && (
        <div>
          <h2>Dashboard - Companies List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>LinkedIn</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Comments</th>
                <th>Periodicity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={index}>
                  <td>{company.name}</td>
                  <td>{company.location}</td>
                  <td>{company.linkedIn}</td>
                  <td>{company.email}</td>
                  <td>{company.phone}</td>
                  <td>{company.comments}</td>
                  <td>{company.periodicity}</td>
                  <td>
                    <button onClick={() => editCompany(company, index)}>Edit</button>
                    <button onClick={() => deleteCompany(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === 'addCompany' && <AddCompany onAddCompany={addCompany} />}
      {view === 'manageCommunication' && <ManageCommunications methods={communicationMethods} onAddMethod={addMethod} onDeleteMethod={deleteMethod} />}
    </div>
  );
};

export default AdminPage;
