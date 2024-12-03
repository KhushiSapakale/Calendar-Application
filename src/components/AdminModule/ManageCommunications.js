import React, { useState } from 'react';

const ManageCommunications = ({ methods = [], onAddMethod, onDeleteMethod }) => {
    const [newMethod, setNewMethod] = useState({
        name: '',
        description: '',
        sequence: methods.length + 1,
        mandatory: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMethod({
            ...newMethod,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMethod(newMethod); // Add new communication method
        setNewMethod({ name: '', description: '', sequence: methods.length + 1, mandatory: false });
    };

    return (
        <div>
            <h2>Manage Communication Methods</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newMethod.name}
                    onChange={handleChange}
                    placeholder="Method Name"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={newMethod.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <input
                    type="number"
                    name="sequence"
                    value={newMethod.sequence}
                    onChange={handleChange}
                    placeholder="Sequence"
                    required
                />
                <label>
                    Mandatory:
                    <input
                        type="checkbox"
                        name="mandatory"
                        checked={newMethod.mandatory}
                        onChange={(e) => setNewMethod({ ...newMethod, mandatory: e.target.checked })}
                    />
                </label>
                <button type="submit">Add Method</button>
            </form>
            <ul>
                {methods.map((method) => (
                    <li key={method.name}>
                        {method.name} - {method.description}
                        <button onClick={() => onDeleteMethod(method.name)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageCommunications;
