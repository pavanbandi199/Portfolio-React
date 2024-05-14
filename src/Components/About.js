import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
const About = () => {
  return (
    <div className=' w-full h-screen px-2' name='about'>
        <div className='p-4 flex flex-col justify-center w-full h-full mx-auto max-w-screen-lg'>
            <div className='pt-8 text-center'><p className='mt-40 pt-36 sm:mt-0 text-3xl md:text-4xl font-bold border-b-4 border-cyan-500 inline ' > About Me</p></div>
            <p className='text-xl mt-16'>
                As a frontend developer, I thrive on the creative process of transforming ideas into immersive digital experiences. With over two years of dedicated practice, 
                I have become adept in HTML, CSS, and JavaScript, with a particular penchant for leveraging React and Tailwind CSS to craft sleek and user-friendly interfaces. 
                My journey is fueled by a passion for innovation and a commitment to delivering exceptional results. Let's collaborate and build something extraordinary together.
            </p>
            <br></br>
            <p className='text-xl'> When I'm not coding, I relax by watching Anime or playing Cricket. I'm always eager to learn new things, and right now, I'm diving into Next.js to keep up with the latest technologies in web development.</p>
            <div className='flex items-center justify-center mt-14 '>
            <a href='https://github.com/pavanbandi199/' target='_blank' rel="noreferrer" className='w-fit font-medium mx-3 hover:scale-110' >
                     <FaGithub size={40} />
            </a>
            <a href='https://www.linkedin.com/in/pavanbandi1999/' target='_blank' rel="noreferrer" className='w-fit  font-medium mx-3 hover:scale-110' >
                     <FaLinkedin size={40} />
            </a>
            </div>     
        </div>
    </div>
  )
}

export default About