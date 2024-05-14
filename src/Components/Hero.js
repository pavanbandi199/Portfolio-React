import React from 'react'
import { HERO_CONTENT } from '../constants/constants'
import heroimg from '../assets/heroimgcrop-transformed1.png'
const Hero = () => {
  return (
    <div className=" lg:mb-36">
      <div className="flex flex-wrap max-w-screen-xl justify-center items-center mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h2
            
              className="pb-10 text-4xl font-bold tracking-tight lg:mt-16 lg:text-6xl"
            >
              Pavankumar Bandi
            </h2>
            <span
              
              className="bg-gradient-to-r from-cyan-300 via-pink-300 to-blue-500 bg-clip-text text-xl md:text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </span>
            <p
              
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8">
          <div className="flex justify-center">
            <img
                className='w-72 rounded-2xl'
              src={heroimg}
              alt="Pavan Bandi"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero