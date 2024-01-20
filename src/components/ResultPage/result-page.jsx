import { useState } from "react";
import {Map, Marker} from 'react-map-gl/maplibre';
import './result-page.css';
import theatre from '../../assets/volkstheater.jpeg';
import Pin from '../../components/Map/Pins/pin.jsx';
import { shareOnMobile } from 'react-mobile-share';

function ResultPage({setNavigation, places}) {
  const place = places[Math.floor(Math.random()*places.length)];

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
          longitude={11.576124}
          latitude={48.137154}
        >
          <Pin type={"draggable-marker-green"} className={'marker'}/>
        </Marker>
        <Marker
          longitude={11.576124}
          latitude={48.145}
        >
          <Pin type={"pin-athina"} className={'marker'}/>
        </Marker>
        <Marker
          longitude={11.6}
          latitude={48.139}
        >
          <Pin type={"pin-pia"} className={'marker'}/>
        </Marker>
      </Map>
      <div className="result-container">
        <div className="text-contaier">
        <p className="location-name">Münchner Volkstheater</p>
        <p className="location-address">Tumblingerstraße 29, 80337 München</p>
        </div>
        <img className='location-image' src={theatre}></img>
        <div className="text-container">
          <p></p>
        </div>
        <button 
          className='button-submit share'  
          onClick={()=>shareOnMobile({
            text: "Let's meet here",
            url: "https://www.muenchner-volkstheater.de",
            title: "React-Mobile-Share",
          })}>share!</button>
      </div>
    </div>
  )
}

export default ResultPage