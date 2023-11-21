import './App.css';
import MainMap from './components/Map/main-map.jsx';
import Header from './components/Navbar/header.jsx';

function App() {
  return (
    <div className='main-container'>
      <Header></Header>
      <MainMap></MainMap>
    </div>
  )
}

export default App