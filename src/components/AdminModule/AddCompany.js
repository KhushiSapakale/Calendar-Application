import React, { useState, useEffect } from 'react';

const AddCompany = ({ onAddCompany, companyToEdit, onDeleteCompany }) => {
    const [company, setCompany] = useState({
        id: '',
        name: '',
        location: '',
        linkedin: '',
        emails: '',
        phoneNumbers: '',
        comments: '',
        communicationPeriodicity: '2 weeks',
    });

    useEffect(() => {
        if (companyToEdit) {
            setCompany(companyToEdit); // Prefill with existing company details for editing
        }
    }, [companyToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompany({
            ...company,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (companyToEdit) {
            onAddCompany(company); // Update company if editing
        } else {
            onAddCompany({ ...company, id: Date.now() }); // Add new company
        }
        setCompany({
            id: '',
            name: '',
            location: '',
            linkedin: '',
            emails: '',
            phoneNumbers: '',
            comments: '',
            communicationPeriodicity: '2 weeks',
        });
    };

    const handleDelete = () => {
        if (companyToEdit) {
            onDeleteCompany(company.id); // Delete the company if it's being edited
        }
    };

    return (
        <div>
            <h2>{companyToEdit ? 'Edit Company' : 'Add Company'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={company.name}
                    onChange={handleChange}
                    placeholder="Company Name"
                    required
                />
                <input
                    type="text"
                    name="location"
                    value={company.location}
                    onChange={handleChange}
                    placeholder="Location"
                    required
                />
                <input
                    type="text"
                    name="linkedin"
                    value={company.linkedin}
                    onChange={handleChange}
                    placeholder="LinkedIn Profile"
                />
                <input
                    type="text"
                    name="emails"
                    value={company.emails}
                    onChange={handleChange}
                    placeholder="Emails"
                />
                <input
                    type="text"
                    name="phoneNumbers"
                    value={company.phoneNumbers}
                    onChange={handleChange}
                    placeholder="Phone Numbers"
                />
                <textarea
                    name="comments"
                    value={company.comments}
                    onChange={handleChange}
                    placeholder="Comments"
                />
                <select
                    name="communicationPeriodicity"
                    value={company.communicationPeriodicity}
                    onChange={handleChange}
                >
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="1 month">1 month</option>
                </select>
                <button type="submit">{companyToEdit ? 'Save Changes' : 'Add Company'}</button>
            </form>
            {companyToEdit && (
                <button onClick={handleDelete}>Delete Company</button>
            )}
        </div>
    );
};

export default AddCompany;
