import React, { useState, useMemo } from 'react';
import './meeting.css';
import PEOPLE from '../../data/people.json';

function Meeting({setNavigation}) {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [selectedPeople, setSelectedPeople] = useState([])

  const handleActivityChange = (e) => {
    setSelectedActivity(e.target.value)
  };

  const data = PEOPLE.map(item => item.name).sort();
  const handleCheckboxChange = (person) => {
    if (selectedPeople.includes(person)) {
      setSelectedPeople(selectedPeople => { return selectedPeople.filter(p => p !== person) })
    } else {
      setSelectedPeople([...selectedPeople, person])
    }
  }

  const suggestActivity = () => {
    setNavigation('SUCCESS');
    event.preventDefault();
    console.log("Submitted")
  }

  const people = useMemo(
    () => data.map((person, index) => (
      <div className="checkbox-item" key={index}>
        <div>
          <label className='input-label'>
            <input
              type="checkbox"
              id={index}
              value={person}
              onChange={() => handleCheckboxChange(person)}
            />
            <span className='name'>{person}</span>
          </label>
        </div>
      </div>
    )), [])

  return (
    <div className="meeting-container">
      <h2>let's start an activity!</h2>
      <form type='submit' onSubmit={suggestActivity}>
        <label>Who should be invited?</label>
        <div className="checkbox-container">
          {people}
        </div>
        <select
          type="text"
          name="activity"
          value={selectedActivity}
          onChange={handleActivityChange}
          required
        >
          <option value="" disabled>select an activity</option>
          <option value="bar">bar</option>
          <option value="restaurant">restaurant</option>
          <option value="museum">museum</option>
          <option value="cinema">cinema</option>
          <option value="theatre">theatre</option>
        </select>
        <button type="submit" className='button-submit suggestion' onClick={suggestActivity}>suggest activity!</button>
      </form>
    </div>
  );
}

export default Meeting