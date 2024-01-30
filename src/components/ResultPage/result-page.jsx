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
  const place = places[Math.floor(Math.random()*places.length)];
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'React-Mobile-Share',
        url: 'https://www.muenchner-volkstheater.de',
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported');
      shareOnMobile({
        url: 'https://www.muenchner-volkstheater.de',
        title: 'React-Mobile-Share',
      });
    }
  };

  return(
    <div className="outer-result-container">
      <Map
        initialViewState={{
          longitude: 11.576124,
          latitude: 48.137154,
          zoom: 12
        }}
        style={{width: '100vw', height: '30vh'}}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=hInnHZLgrLFW1U6e6Wtv"
      >
        <Marker
          longitude={11.555450283494345}
          latitude={48.12379822994768}
        >
          <Pin type={"draggable-marker-green"} className={'marker'}/>
        </Marker>
        <Marker
          longitude={11.55}
          latitude={48.14}
        >
          <Pin type={"pin-athina"} className={'marker'}/>
        </Marker>
        <Marker
          longitude={11.59}
          latitude={48.13}
        >
          <Pin type={"pin-pia"} className={'marker'}/>
        </Marker>
      </Map>
      <div className="result-container">
        <div className="text-container">
          <p className="location-name">Münchner Volkstheater</p>
          <div className='text-div'>
            <img src={addressIcon} alt="address" className='icon'></img>
            <p className="location-address">Tumblingerstraße 29, 80337 München</p>
          </div>
          <div className="text-div">
            <img src={wwwIcon} alt="www" className='icon'></img>
            <a className="location-website" href="https://www.muenchner-volkstheater.de" target="_blank">www.muenchner-volkstheater.de</a>
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
            onClick={handleShare}>
              share location!
          </button>
        </div>
        <img className='location-image' src={theatre}></img>
      </div>
    </div>
  )
}

export default ResultPage