import {Map, Marker} from 'react-map-gl/maplibre';
import VolkstheaterImage from '../../assets/volkstheater.jpeg';
import stockImage from '../../assets/stock-image.jpeg';
import Pin from '../../components/Map/Pins/pin.jsx';
import { shareOnMobile } from 'react-mobile-share';
import backButton from '../../assets/result-page/back-button.svg';
import wwwIcon from '../../assets/result-page/www.svg'; 
import clock from '../../assets/result-page/clock.svg'; 
import addressIcon from '../../assets/result-page/address.svg';
import './result-page.css';
import barImage from '../../assets/stock-images/bar-image.png';
import cinemaImage from '../../assets/stock-images/cinema-image.png';
import museumImage from '../../assets/stock-images/museum-image.png';
import restaurantImage from '../../assets/stock-images/restaurant-image.png';
import theatreImage from '../../assets/stock-images/theatre-image.png';

function ResultPage({setNavigation, places, selectedPeople, selectedActivity}) {
  const possibleActivities = places.filter(p => p.type == selectedActivity)
  const randomIndex = Math.floor(Math.random() * possibleActivities.length);
  const place = possibleActivities[randomIndex]

  const markers = [
    { longitude: place.longitude, latitude: place.latitude, type: 'draggable-marker-green' },
    { longitude: 11.54, latitude: 48.12, type: 'pin-1' },
    { longitude: 11.58, latitude: 48.127, type: 'pin-2' },
  ];
  const handleShare = (place) => {
    if (navigator.share) {
      navigator.share({
        title: place.name,
        url: '//'+place.link,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported');
      shareOnMobile({
        url: place.name,
        title: '//'+place.link,
      });
    }
  };

  return(
    <div className="outer-result-container">
      <Map
        initialViewState={{
          longitude: place.longitude,
          latitude: place.latitude,
          zoom: 12
        }}
        style={{width: '100vw', height: '30vh'}}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=hInnHZLgrLFW1U6e6Wtv"
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            longitude={marker.longitude}
            latitude={marker.latitude}
          >
            <Pin type={marker.type} className={'marker'} />
          </Marker>
        ))}
      </Map>
      <div className="result-container">
        <div className="text-container">
          <p className="location-name">{place.name}</p>
          {place.address &&  <div className='text-div'>
            <img src={addressIcon} alt="address" className='icon'></img>
            <p className="location-address">{place.address}</p>
          </div>}
          {place.link && <div className="text-div">
            <img src={wwwIcon} alt="www" className='icon'></img>
            <a className="location-website" href={'//'+place.link} target="_blank">{place.link}</a>
          </div>}
          <div className="text-div">
            <img src={clock} alt="clock" className='icon'></img>
            <a className="location-address">Open · closes at 11pm</a>
          </div>
        </div>
        <div className='buttons-container'>
        <button className='back-button back' onClick={()=>setNavigation('MEETING')}> 
          <img src={backButton} alt="back"></img>
        </button>
        {place.link && <button 
            className='button-submit share'  
            onClick={() => handleShare(place)}>
              share location!
          </button>}
        </div>
          <img className='location-image' 
          src={
            place.name === 'Neue Pinakothek' ? VolkstheaterImage :
            place.type === 'bar' ? barImage :
            place.type === 'cinema' ? cinemaImage :
            place.type === 'museum' ? museumImage :
            place.type === 'restaurant' ? restaurantImage :
            place.type === 'theatre' && (place.name !== 'Neue Pinakothek') ? theatreImage :
            stockImage
            }
          alt={place.type}>
          </img>
      </div>
    </div>
  )
}

export default ResultPage