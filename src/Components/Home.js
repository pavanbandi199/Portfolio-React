import React from 'react'
import { FaDownload  } from "react-icons/fa";
import heroimg from '../assets/heroimgcrop-transformed1.png'
const Home = () => {
  return (
    <div name='home' className='h-screen w-full '>
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-3 md:flex-row'>
            <div className='flex flex-col justify-center h-full gap-3 md:mr-2 '>
                <h1 className='text-4xl sm:text-5xl  font-bold bg-gradient-to-r from-cyan-500 to-blue-700 inline-block text-transparent bg-clip-text'>Hello, I'm Pavakumar Bandi. </h1>
                <p className='text-gray-400 py-4 font-medium'>I'm a Frontend Developer. I have more than two years of experience, I've been building cool stuff on the web. I really enjoy using React and Tailwind CSS to make websites that look great and work smoothly.</p>
                <div className='flex flex-col md:flex-row'>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white group w-fit flex justify-center items-center gap-2 rounded-full py-3 px-5 font-medium my-1 hover:scale-105'>
                         Resume <FaDownload  size={20}  />{/* <span className='group-hover:rotate-180 duration-300'><FaDownload    size={20}  /></span> */}
                    </button>
                    {/* <button className='bg-white rounded-full py-3 px-5 font-medium mx-3 hover:scale-105'>
                        Contact me
                    </button>
                    <button className='bg-white flex justify-center px-3 py-1 items-center gap-2 rounded-full p-1 font-medium mx-3 hover:scale-105' >
                       Github <FaGithub size={40} />
                    </button>
                    <button className='bg-white flex justify-center px-3 py-1 items-center gap-2 rounded-full p-1 font-medium mx-3 hover:scale-105' >
                       LinkedIn <FaLinkedin size={40} />
                    </button> */}
                </div>
            </div>
            <div className='md:ml-2 '>
                <img src={heroimg} className=' rounded-3xl mx-auto w-2/3 md:w-full' alt='profilephoto'/>
            </div>
        </div>
    </div>
  )
}

export default Home
// flex flex-col md:flex-row gap-6 justify-center items-center