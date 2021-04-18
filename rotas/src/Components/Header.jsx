import React from 'react';
import {Link} from 'react-router-dom'

function Header (){
  return(
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produto">Produtos</Link></li>
        <li><Link to="/sobre">Sobre a Empresa</Link></li>
      </ul>
    </nav>
  )
}

export default Header;