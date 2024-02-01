import './menu-items.css'

function MenuItems({setNavigation, navigation}) {


  return (
    <div className='menu-items-container'>
    <div className="menu-items">
      <div className={`${navigation == 'MAP' ? 'button-container active-map' : 'button-container'}`}>
        <button onClick={()=>setNavigation('MAP')} className="menu-item map-button"></button>
        <p className='button-text'>main map</p>
      </div>
      <div className={`${navigation == 'PLACE' ? 'button-container active-place' : 'button-container'}`}>
        <button onClick={()=>setNavigation('PLACE')} className="menu-item place-button"></button>
        <p className='button-text'>add place</p>
      </div>
      <div className={`${navigation == 'MEETING' ? 'button-container active-meeting' : 'button-container'}`}>
        <button onClick={()=>setNavigation('MEETING')} className="menu-item activity-button"></button>
        <p className='button-text'>plan activity</p>
      </div>
    </div>
    <div className="logo">
      <h1 className="headline" onClick={()=>setNavigation('IMPRESSUM')}>map&meet</h1>
    </div>
    </div>
  )
}

export default MenuItems