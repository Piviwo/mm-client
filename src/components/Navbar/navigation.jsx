import MenuItems from "./MenuItems/menu-items";

function Navigation({setNavigation}) {
  return (
    <div className="navbar-container">
      <MenuItems setNavigation={setNavigation}></MenuItems>
    </div>
  );
}

export default Navigation