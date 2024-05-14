import React from 'react'
import { ABOUT_TEXT,ABOUT_TEXT_TWO } from "../constants/constants";
const AboutNew = () => {
  return (
    <div className=" pb-4">
      <div className='text-center'><h2 className="my-20 text-center mx-auto text-3xl md:text-4xl font-bold border-b-4 border-cyan-500 inline-block">
        About Me</h2></div>
       
     
            <p className="my-2 max-w-screen-xl mx-auto py-6">{ABOUT_TEXT}</p>
            <p className="my-2 max-w-screen-xl mx-auto py-6">{ABOUT_TEXT_TWO}</p>
          
      
    </div>
  )
}

export default AboutNew