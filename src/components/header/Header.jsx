// style 
import './Header.css'

import React from 'react'

function Header({Count}) {
  return (
    <nav className='navigation-container'>
        <ul className='nav-items container'>
            <li className='item'><a href="#">Icon</a></li>
            <li className='item'>Users {Count()}</li>
        </ul>
    </nav>
  )
}

export default Header