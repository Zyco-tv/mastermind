import React from 'react';
import logo from './logo.svg';
import './App.css';

function Navbar() {
  return (
    <nav className="menu" tabindex="0">
	<div className="smartphone-menu-trigger"></div>
  <header className="avatar">
		<img src="http://www.billselby.com/Graphics/PopUps/PopUps2/gamelogos/mastermind.jpg" />
  </header>
	<ul>
    <li tabindex="0" className="icon-dashboard"><span>Games</span></li>
    <li tabindex="0" className="icon-customers"><span>Score</span></li>
    <li tabindex="0" className="icon-users"><span>Règle</span></li>
    <li tabindex="0" className="icon-settings"><span>Settings</span></li>
  </ul>
</nav>
  );
}

export default Navbar;
