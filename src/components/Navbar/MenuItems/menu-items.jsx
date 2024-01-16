import './menu-items.css'

function MenuItems({setNavigation}) {

  return (
    <div className='menu-items-container'>
    <div className="menu-items">
      <div className='button-container'>
        <button onClick={()=>setNavigation('MAP')} className="menu-item map-button"></button>
        <p className='button-text'>main map</p>
      </div>
      <div className='button-container'>
        <button onClick={()=>setNavigation('PLACE')} className="menu-item place-button"></button>
        <p className='button-text'>add place</p>
      </div>
      <div className='button-container'>
        <button onClick={()=>setNavigation('MEETING')} className="menu-item activity-button"></button>
        <p className='button-text'>plan activity</p>
      </div>
    </div>
    <div className="logo">
      <h1 className="headline" onClick={()=>setNavigation('IMPRESSUM')}>easy going</h1>
    </div>
    </div>
  )
}

export default MenuItems