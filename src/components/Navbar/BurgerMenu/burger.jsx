import React, { useState } from 'react';
import './burger.css'

function Burger({ open, setOpen }) {

  return (
    <div className="burger-menu">
      <input class="checkbox" type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <div class="logo">
        <h1>Easy Going</h1>
      </div>
      <div class="menu-items">
        <li><a>home</a></li>
        <li><a>start a meeting</a></li>
      </div>
    </div>
  )
}

export default Burger