import React, { useState, useRef } from 'react';
import './new-place-form.css';
import MainMap from '../Map/main-map';

function PlaceForm({marker, setMarker}) {

  const [formData, setFormData] = useState({ name: '', image: '', type: '', latitude: '', longitude: '' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const hiddenFileInput = useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/', {
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
    <div className='map-form-container'>
    <MainMap marker={marker} setMarker={setMarker}></MainMap>
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
            placeholder={"name"}
          />
        </label>
        <br />
        <label className="label-upload">
          upload an image
          <button 
            className="button-upload"
            onClick={handleClick}>
          </button>
          <input
            type="file"
            name="image"
            accept="image/*"
            ref={hiddenFileInput} 
            value={formData.image}
            //onChange={handleChange}
            style={{display:'none'}}
          />
        </label>
        <br />
        <label>
          address:
          <input
            type="text"
            name="address"
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
            value={marker.longitude}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          latitude:
          <input
            type="text"
            name="latitude"
            value={marker.latitude}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">add place to map!</button>
      </form>
    </div>
    </div>
  );
};

export default PlaceForm;
