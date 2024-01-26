import React from "react";
import './header.css'
import MenuItems from "./MenuItems/menu-items";

function Header({setNavigation, navigation}) {
  return (
    <div className="navbar-container">
      <MenuItems setNavigation={setNavigation} navigation={navigation}></MenuItems>
    </div>
  );
}

export default Header