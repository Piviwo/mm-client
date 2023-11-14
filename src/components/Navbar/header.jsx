import React from "react";
import './header.css'
import Burger from "./BurgerMenu/burger";

function Header() {
  return (
    <div className="nav-bar-container">
      <Burger></Burger>
    </div>
  );
}

export default Header