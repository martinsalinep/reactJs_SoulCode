import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu (){
  return(
    <div className='Menu'>
      <nav>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/useState'>useState</Link></li>
        <li><Link to='/useEffect'>useEffect</Link></li>
        <li><Link to='/useRef'>useRef</Link></li>
        <li><Link to='/FormDados'>formDados</Link></li>
        <li><Link to='/useMemo'>useMemo</Link></li>
        <li><Link to='/createContext'>createContext</Link></li>   
        <li><Link to='/createContext2'>createContext2</Link></li>
        <li><Link to='/useReducer'>useReducer</Link></li>
        <li><Link to='/useReducer2'>useReducer2</Link></li>
      </nav>
    </div>
  )
}

export default Menu;