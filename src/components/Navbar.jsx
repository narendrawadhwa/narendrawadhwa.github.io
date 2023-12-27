import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<header className='header'>
    <NavLink to="/" className='px-2 py-1 rounded-lg sm:text-[16px] text-[14px] bg-white items-center justify-center flex font-bold shadow-md'>
        <p className='blue-gradient_text'>NARENDRAs
        <br/>WORLD</p>
    </NavLink>
    <nav className='flex text-base gap-7 font-medium'>
    <NavLink to='/contact' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black' }>Contact</NavLink>
    <NavLink to='/about' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black' }>About</NavLink>
    <NavLink to='/projects' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black' }>Projects</NavLink>

    </nav>
</header>  )
}

export default Navbar;