import React, { useState } from 'react';
import './meeting.css';
import PEOPLE from '../../data/people.json' 

function Meeting() {
  const [formData, setFormData] = useState({ people:'', activity:'' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };
  
  const handleSubmit = async (e) => {
    console.log("Submitted")
  }
  return (
    <div className="meeting-container">
      <h2></h2>
      <form action="" onSubmit={handleSubmit}>
        <label>
          select people you would like to meet up with
          <select
            type="text"
            name="people"
            value=""
            onChange={handleChange}
          >
            {
              <option value="" disabled></option>
            }
          </select>
        </label>
        <br />
        <label>
          select an activity
          <select
            type="text"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
          >
            <option value="" disabled></option>
              <option value="bar">bar</option>
              <option value="restaurant">restaurant</option>
              <option value="museum">museum</option>
              <option value="cinema">cinema</option>
              <option value="theatre">theatre</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default Meeting