import { useState, useEffect } from 'react';
import MainMap from './components/Map/main-map.jsx';
import PlaceForm from './components/AddAPlace/new-place-form.jsx';
import Header from './components/Navbar/header.jsx';
import Meeting from './components/Meeting/meeting.jsx';
import ResultPage from './components/ResultPage/result-page.jsx';
import Impressum from './components/Impressum/impressum.jsx';
import './App.css';

function App() {
  const [navigation, setNavigation] = useState('MAP');
  const [marker, setMarker] = useState({ longitude: 11.576040415348473, latitude: 48.145493694955945 });
  const [places, setPlaces] = useState([]);
  const [street, setStreet] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/places');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPlaces(data.places);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchOnClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/places');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPlaces(data.places);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='main-container'>
      <Header setNavigation={setNavigation} navigation={navigation}></Header>
      {navigation === 'MAP' && places.length>0 &&
        <MainMap marker={marker} setMarker={setMarker} navigation={navigation} places={places} street={street} setStreet={setStreet}></MainMap>
      }
      {navigation === 'PLACE' &&
        <PlaceForm 
          marker={marker} 
          setMarker={setMarker} 
          navigation={navigation} 
          setNavigation={setNavigation} 
          places={places}
          street={street}
          setStreet={setStreet}
          fetchOnClick={fetchOnClick}>
        </PlaceForm>
      }
      {navigation === 'MEETING' &&
        <Meeting setNavigation={setNavigation}></Meeting>
      }
      {navigation === 'SUCCESS' &&
        <ResultPage setNavigation={setNavigation} places={places}></ResultPage>
      }
      {navigation === 'IMPRESSUM' &&
        <Impressum></Impressum>
      }
    </div>
    
  )
}

export default App