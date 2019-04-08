import React from 'react';
import {NavLink} from 'react-router-dom'


const AppNav =()=>(
    <ul className='menu-list'>
        <li><NavLink className='nav__link' to='/menu'>Menu</NavLink></li>
        <li><NavLink className='nav__link' to='/about'>About</NavLink></li>
        <li><NavLink className='nav__link' to='/orders'>delivery</NavLink></li>
        <li><NavLink className='nav__link' to='/contacts'>contacts</NavLink></li>

    </ul>

)

export default AppNav;