import React from "react";
import './header.css'
import MenuItems from "./MenuItems/menu-items";

function Header({setNavigation}) {
  return (
    <div className="nav-bar-container">
      <MenuItems setNavigation={setNavigation}></MenuItems>
    </div>
  );
}

export default Header