import React from "react";
import './header.css'
import Burger from "./BurgerMenu/burger";

function Header({setNavigation}) {
  return (
    <div className="nav-bar-container">
      <Burger setNavigation={setNavigation}></Burger>
    </div>
  );
}

export default Header