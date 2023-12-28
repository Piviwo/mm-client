import React, { useState } from 'react';
import './new-place-form.css';

function PlaceForm() {
  const [formData, setFormData] = useState({ name: '', image: '', type: '', latitude: '', longitude: '' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...formData})
    });
  
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log('json response', jsonResponse);
      //setFormData({ name: '', image: '', type: '' });
    } else {
      console.error('Error:', response.status);
    }
  };

  return (
    <div className='form-container'>
      <h2>add a new place</h2>
      <form action="" onSubmit={handleSubmit}>
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
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          type:
          <select
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="" disabled>select a location type</option>
            <option value="bar">bar</option>
            <option value="cinema">cinema</option>
            <option value="museum">museum</option>
            <option value="restaurant">restaurant</option>
          </select>
        </label>
        <br />
        <label>
          longitude:
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          latitude:
          <input
            type="text"
            name="latitude"
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
