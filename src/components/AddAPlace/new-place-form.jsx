import React, { useState } from 'react';
import './new-place-form.css';

function PlaceForm() {
  const [formData, setFormData] = useState({ name: '', image: '', type:'', latitude:'', longitude:'' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have a JSON file named 'data.json'
    const jsonFile = '../../data/data.json';

    // Read the existing data from the JSON file
    fetch(jsonFile)
      .then((response) => response.json())
      .then((data) => {
        // Add the new information to the data array
        data.push(formData);

        // Write the updated data back to the JSON file
        return fetch(jsonFile, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      })
      .then(() => {
        console.log('Data added successfully!');
        setFormData({ name: '', age: '' });
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className='form-container'>
      <h2>add a new place</h2>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          image:
          <input
            type="text"
            name="age"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          type:
          <select
            type="text"
            name="age"
            value={formData.type}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          longitude:
          <input
            type="text"
            name="age"
            value={formData.longitude}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          latitude:
          <input
            type="text"
            name="age"
            value={formData.latitude}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PlaceForm;
