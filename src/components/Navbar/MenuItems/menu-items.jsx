import './menu-items.css'

function MenuItems({setNavigation}) {

  return (
    <div className='menu-items-container'>
    <div className="menu-items">
      <button onClick={()=>setNavigation('MAP')} className="menu-item"></button>
      <button onClick={()=>setNavigation('PLACE')} className="menu-item"></button>
      <button onClick={()=>setNavigation('MEETING')} className="menu-item"></button>
    </div>
    <div className="logo">
      <h1 className="headline">easy going</h1>
    </div>
    </div>
  )
}

export default MenuItems