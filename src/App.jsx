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
  
  return (
    <div className='main-container'>
      <Header setNavigation={setNavigation}></Header>
      {navigation === 'MAP' &&
        <MainMap marker={marker} setMarker={setMarker} navigation={navigation}></MainMap>
      }
      {navigation === 'PLACE' &&
        <PlaceForm marker={marker} setMarker={setMarker}></PlaceForm>
      }
      {navigation === 'MEETING' &&
        <Meeting setNavigation={setNavigation}></Meeting>
      }
      {navigation === 'SUCCESS' &&
        <ResultPage setNavigation={setNavigation}></ResultPage>
      }
    </div>
    
  )
}

export default App