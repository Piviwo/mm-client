import React, { useEffect, useMemo } from 'react';
import './meeting.css';
import PEOPLE from '../../data/people.json';
import backButton from '../../assets/close-button.svg'

function Meeting({setNavigation, selectedActivity, setSelectedActivity, selectedPeople, setSelectedPeople}) {

  const handleActivityChange = (e) => {
    setSelectedActivity(e.target.value)
  };

  const suggestActivity = () => {
    setNavigation('SUCCESS');
    //event.preventDefault();
  }

  const isFormValid = () => {
    return selectedActivity !== '' && selectedPeople.length !== 0;
  };

  const data = PEOPLE.map(item => item.name).sort();

  const handleCheckboxChange = (person) => {
    console.log("Previous State:", selectedPeople);
    setSelectedPeople((selectedPeople) => {
      if (selectedPeople.includes(person)) {
        console.log("Updated State 1", selectedPeople.filter((p) => p !== person))
        return selectedPeople.filter((p) => p !== person);
      } else {
        console.log("Updated State 2", [...selectedPeople, person])
        return [...selectedPeople, person];
      }
    });
  };

  const people = data.map((person, index) => (
    <div className="checkbox-item" key={index}>
      <label className={`input-label ${selectedPeople.includes(person) ? 'selected' : ''}`}>
        <input
          type="checkbox"
          id={index}
          value={person}
          checked={selectedPeople.includes(person)}
          onChange={() => handleCheckboxChange(person)}
        />
        <span className={`name ${selectedPeople.includes(person) ? 'selected' : ''}`}>{person}</span>
      </label>
    </div>
  ))

  const clearSelection = () => {
    setNavigation('MAP')
    setSelectedActivity('')
    setSelectedPeople([])
  }

  return (
    <div className="meeting-container">
      <button className='back-button back-meeting' onClick= {clearSelection}>
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