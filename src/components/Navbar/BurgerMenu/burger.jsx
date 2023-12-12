import './burger.css'

function Burger({setNavigation}) {

  return (
    <div className="burger-menu">
      <input className="checkbox" type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <div className="logo">
        <h1 className="headline">easy going</h1>
      </div>
      <div className="menu-items">
        <li onClick={()=>setNavigation('MAP')}><a className="menu-item">map</a></li>
        <li onClick={()=>setNavigation('PLACE')}><a className="menu-item">add a place</a></li>
        <li onClick={()=>setNavigation('MEETING')}><a className="menu-item">start a meeting</a></li>
      </div>
    </div>
  )
}

export default Burger