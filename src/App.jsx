import './App.css'
import CartoMap from './components/map/Map.jsx'
import Header from './components/header/Header.jsx'

function App() {
  return (
    <div className='main-container'>
      <Header></Header>
      <CartoMap></CartoMap>
    </div>
  )
}

export default App