import { useState } from "react";
import './result-page.css';
import theatre from '../../assets/volkstheater.jpeg'

function ResultPage({setNavigation}) {

  return(
    <div className="result-container">
      <div className="text-contaier">
      <p className="location-name">Münchner Volkstheater</p>
      <p className="location-address">Tumblingerstraße 29, 80337 München</p>
      </div>
      <img className='location-image' src={theatre}></img>
      <div className="text-container">
        <p>share this location with</p>
      </div>
      <button className='button-submit back' onClick={()=>setNavigation('MEETING')}>take me back</button>

    </div>
  )
}

export default ResultPage