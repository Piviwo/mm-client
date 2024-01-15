import { useState, useEffect } from 'react';
import MainMap from './components/Map/main-map.jsx';
import PlaceForm from './components/AddAPlace/new-place-form.jsx';
import Header from './components/Navbar/header.jsx';
import Meeting from './components/Meeting/meeting.jsx';
import ResultPage from './components/ResultPage/result-page.jsx';
import './App.css';

function App() {
  const [navigation, setNavigation] = useState('MAP');
  const [marker, setMarker] = useState({ longitude: 11.576124, latitude: 48.137154 });
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/places');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPlaces(data.places);
        console.log('data fetched!')
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='main-container'>
      <Header setNavigation={setNavigation}></Header>
      {navigation === 'MAP' && places &&
        <MainMap marker={marker} setMarker={setMarker} navigation={navigation} places={places}></MainMap>
      }
      {navigation === 'PLACE' && places &&
        <PlaceForm marker={marker} setMarker={setMarker} places={places}></PlaceForm>
      }
      {navigation === 'MEETING' &&
        <Meeting setNavigation={setNavigation}></Meeting>
      }
      {navigation === 'SUCCESS' &&
        <ResultPage setNavigation={setNavigation} places={places}></ResultPage>
      }
    </div>
    
  )
}

export default App