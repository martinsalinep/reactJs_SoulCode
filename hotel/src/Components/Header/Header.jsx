/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../../img/logo.jpg';
import './Header.css'

function Header() {
  return (
    <>
      <header>
        <a href="#"><img src={Logo} alt="Hotel Paraiso" /></a>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Reservas</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}


export default Header;