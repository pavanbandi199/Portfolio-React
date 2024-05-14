import React, { useState } from 'react'
import { FaTimes , FaBars } from "react-icons/fa";
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Experience'
        },
        {
            id: 4,
            link: 'Projects'
        },
        {
            id: 5,
            link: 'Contact'
        }
    ]
  return (
    <div className='flex items-center justify-between  fixed w-screen px-4 h-16 text-black border-b border-black'>
        <div>
            <h1 className='text-2xl font-medium md:text-4xl bg-gradient-to-r from-cyan-500 to-blue-700 inline-block text-transparent bg-clip-text'>PavanBandi</h1>
        </div>
        
            <ul className='hidden md:flex'>
                {links.map(({id,link} ) => (
                    <li key={id} className='px-3 font-medium hover:scale-105 cursor-pointer'>{link}</li>
                ))}
            </ul>
            <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
              {nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
            </div>
            {nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white '>
            {links.map(({id,link} ) => (
                    <li key={id} className='py-6 text-3xl font-medium hover:scale-105 cursor-pointer'>{link}</li>
                ))}
            </ul>}
           
    </div>
  )
}

export default Navbar