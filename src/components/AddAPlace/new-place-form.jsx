import React, { useState, useRef, useEffect } from 'react';
import './new-place-form.css';
import MainMap from '../Map/main-map';
import backButton from '../../assets/close-button.svg'

function PlaceForm({marker, setMarker, places, navigation, setNavigation}) {
  const initialState = { name: '', image: '', type: ''}
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const hiddenFileInput = useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/place', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...formData, latitude: marker.latitude, longitude: marker.longitude})
    });
  
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log('json response', jsonResponse);
      setFormData({...formData, name: '', image: '', type: ''});

    } else {
      console.error('Error:', response.status);
    }
  };

  return (
    <div className='map-form-container'>
    <MainMap marker={marker} setMarker={setMarker} places={places} navigation={navigation}></MainMap>
    <div className='form-container'>
      <h2>let's add a new place!</h2>
      <form action="" onSubmit={handleSubmit}>
        <button className='back-button' onClick= {() => {setNavigation('MAP')}}>
        <img src={backButton} alt="Close"></img>
        </button>
        <input type="text" id="name" name="name" required  value={formData.name} onChange={handleChange} placeholder="name"/>
        <input type="text" id="address" name="address" placeholder="address"/>
        <select type="text" id="type" name="type" required value={formData.type} onChange={handleChange}>
          <option value="" disabled>select a location type</option>
          <option value="bar">bar</option>
          <option value="cinema">cinema</option>
          <option value="museum">museum</option>
          <option value="restaurant">restaurant</option>
          <option value="cafe">café</option>
          <option value="theatre">theatre</option>
          <option value="park">park</option>
          <option value="library">library</option>
          <option value="swimming">swimming pool</option>
        </select>

          <input
            type="text"
            name="longitude"
            value={marker.longitude}
            onChange={handleChange}
            style={{display:'none'}}
          />
          <input
            type="text"
            name="latitude"
            value={marker.latitude}
            onChange={handleChange}
            style={{display:'none'}}
          />

          {/* {<label className="label-upload">
            upload an image
            <button 
              type="button"
              className="button-upload"
              onClick={handleClick}>
            </button>
            <input
              type="file"
              name="image"
              accept="image/*"
              ref={hiddenFileInput} 
              value={formData.image}
              style={{display:'none'}}
            />
          </label>} */}
        
        <button type="submit" className='button-submit place'>add place to map!</button>
      </form>
    </div>
    </div>
  );
};

export default PlaceForm;
