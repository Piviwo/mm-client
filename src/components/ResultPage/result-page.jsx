import { useState } from "react";
import './result-page.css';

function ResultPage({setNavigation}) {

  return(
    <div className="result-container">
      <div className="text-contaier">
      <p>name</p>
      <p>address</p>
      </div>
      <img></img>
      <div className="text-container">
        <p>share this location with</p>
      </div>
      <button className='button-submit back' onClick={()=>setNavigation('MEETING')}>take me back</button>

    </div>
  )
}

export default ResultPage