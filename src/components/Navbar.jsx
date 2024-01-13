import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<header className='header'>
    <NavLink to="/3D_Portfolio_App/" className='px-2 py-1 rounded-lg text-[13px] bg-white items-center justify-center flex font-bold shadow-md'>
        <p className='blue-gradient_text'>
          NARENDRAs
        <br/>WORLD
        </p>
    </NavLink>
    <nav className='flex gap-7 text-[17px] font-medium'>
    <NavLink to='/3D_Portfolio_App/about' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black' }>About</NavLink>
    <NavLink to='/3D_Portfolio_App/projects' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black' }>Projects</NavLink>
    <NavLink to='/3D_Portfolio_App/bts' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black' }>BTS</NavLink>

    </nav>
</header>  )
}

export default Navbar