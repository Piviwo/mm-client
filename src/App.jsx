import './App.css';
import CartoMap from './components/Map/CartoMap.jsx';
import Header from './components/Navbar/header.jsx';

function App() {
  return (
    <div className='main-container'>
      <Header></Header>
      <CartoMap></CartoMap>
    </div>
  )
}

export default App