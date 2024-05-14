import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
const NavbarNew = () => {
  return (
    <div>
         <nav className="mb-20 flex items-center justify-between py-2 border-b border-white">
            <div className="flex justify-between items-center">
                <div className="mx-2 w-10 text-xl md:text-3xl font-bold" alt="logo" >PavanBandi</div>
            </div>
            <div className="m-4 flex items-center justify-center gap-4 text-xl md:text-2xl">
                <a href='https://www.linkedin.com/in/pavanbandi1999/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
                <a href='https://github.com/pavanbandi199/' target='_blank' rel="noreferrer" ><FaGithub /></a>
                <a href='https://github.com/pavanbandi199/' target='_blank' rel="noreferrer" className='font-bold' ><GrDocumentDownload  /></a>
            </div>
        </nav>
    </div>
  )
}

export default NavbarNew