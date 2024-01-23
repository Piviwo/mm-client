import React, { useState, useMemo } from 'react';
import './meeting.css';
import PEOPLE from '../../data/people.json';
import backButton from '../../assets/close-button.svg'

function Meeting({setNavigation}) {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [selectedPeople, setSelectedPeople] = useState([])

  const handleActivityChange = (e) => {
    setSelectedActivity(e.target.value)
  };

  const suggestActivity = () => {
    setNavigation('SUCCESS');
    event.preventDefault();
  }

  const isFormValid = () => {
    return selectedActivity !== '' && selectedPeople.length !== 0;
  };

  const data = PEOPLE.map(item => item.name).sort();
  const handleCheckboxChange = (person) => {
    if (selectedPeople.includes(person)) {
      setSelectedPeople(selectedPeople => { return selectedPeople.filter(p => p !== person) })
    } else {
      setSelectedPeople([...selectedPeople, person])
    }
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
      <button className='back-button back-meeting' onClick= {() => {setNavigation('MAP')}}>
        <img src={backButton} alt="Close"></img>
      </button>
      <h2>let's plan an activity!</h2>
      <form action='' onSubmit={suggestActivity}>
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
        <label>Who should be invited?</label>
        <div className="checkbox-container">
          {people}
        </div>
        <button type="submit" className='button-submit suggestion' onClick={suggestActivity} disabled={!isFormValid()}>get suggestion!</button>
      </form>
    </div>
  );
}

export default Meeting