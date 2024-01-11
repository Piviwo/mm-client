import React, { useState, useMemo } from 'react';
import './meeting.css';
import PEOPLE from '../../data/people.json';

function Meeting() {
  const [formData, setFormData] = useState({ people:'', activity:'' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const data = PEOPLE.map(item => item.name)
  const[selectedOptions, setSelectedOptions] = useState([])

  const handleCheckboxChange = (person) => {
    console.log(person)
  }

  const people = useMemo(
    () => data.map((person, index) => (
    <div className="checkbox-item" key={index}>
      <label htmlFor={person}>{person}</label>
      <input
        type="checkbox"
        id={index}
        value={person}
        checked={selectedOptions.includes(person)}
        onChange={() => handleCheckboxChange(person)}
      />
    </div>
  )),[])

  const handleSubmit = async (e) => {
    console.log("Submitted")
  }
  return (
    <div className="meeting-container">
      <h2></h2>
      <form action="" onSubmit={handleSubmit}>
        <label>select people you would like to meet up with</label>
        <div className="checkbox-container">
          {people}
        </div>
        <br />    
        <select
          type="text"
          name="activity"
          value={formData.activity}
          onChange={handleChange}
        >
          <option value="" disabled>select an activity</option>
          <option value="bar">bar</option>
          <option value="restaurant">restaurant</option>
          <option value="museum">museum</option>
          <option value="cinema">cinema</option>
          <option value="theatre">theatre</option>
        </select>
        <button type="submit">suggest activity!</button>
      </form>
      <div className='activity-suggestion'></div>
    </div>
  );
}

export default Meeting