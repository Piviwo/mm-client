import {Map, Marker} from 'react-map-gl/maplibre';
import theatre from '../../assets/volkstheater.jpeg';
import Pin from '../../components/Map/Pins/pin.jsx';
import { shareOnMobile } from 'react-mobile-share';
import backButton from '../../assets/result-page/back-button.svg';
import wwwIcon from '../../assets/result-page/www.svg'; 
import clock from '../../assets/result-page/clock.svg'; 
import shareIcon from '../../assets/result-page/share.svg';
import addressIcon from '../../assets/result-page/address.svg';
import './result-page.css';

function ResultPage({setNavigation, places, selectedPeople, selectedActivity}) {
  const place = places.filter(p => p.name == 'Münchner Volkstheater')[0]
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
        <Marker
          longitude={place.longitude}
          latitude={place.latitude}
        >
          <Pin type={"draggable-marker-green"} className={'marker'}/>
        </Marker>
        <Marker
          longitude={11.54}
          latitude={48.12}
        >
          <Pin type={"pin-1"} className={'marker'}/>
        </Marker>
        <Marker
          longitude={11.58}
          latitude={48.127}
        >
          <Pin type={"pin-2"} className={'marker'}/>
        </Marker>
      </Map>
      <div className="result-container">
        <div className="text-container">
          <p className="location-name">{place.name}</p>
          <div className='text-div'>
            <img src={addressIcon} alt="address" className='icon'></img>
            <p className="location-address">{place.address}</p>
          </div>
          <div className="text-div">
            <img src={wwwIcon} alt="www" className='icon'></img>
            <a className="location-website" href={'//'+place.link} target="_blank">{place.link}</a>
          </div>
          <div className="text-div">
            <img src={clock} alt="clock" className='icon'></img>
            <a className="location-address">Open · closes at 11pm</a>
          </div>
        </div>
        <div className='buttons-container'>
        <button className='back-button back' onClick={()=>setNavigation('MEETING')}> 
            <img src={backButton} alt="back"></img>
          </button>
          <button 
            className='button-submit share'  
            onClick={() => handleShare(place)}>
              share location!
          </button>
        </div>
        <img className='location-image' src={theatre}></img>
      </div>
    </div>
  )
}

export default ResultPage