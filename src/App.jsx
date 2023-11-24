import './App.css';
import MainMap from './components/Map/main-map.jsx';
import PlaceForm from './components/AddAPlace/new-place-form.jsx';
import Header from './components/Navbar/header.jsx';
import { useState } from 'react';

function App() {
  const [navigation, setNavigation] = useState('MAP');
  return (
    <div className='main-container'>
      <Header setNavigation={setNavigation}></Header>
      {navigation === 'MAP' &&
        <MainMap></MainMap>
      }
      {navigation === 'PLACE' &&
        <PlaceForm></PlaceForm>
      }
      {navigation === 'MEETING' &&
        <div></div>
      }
    </div>
    
  )
}

export default App