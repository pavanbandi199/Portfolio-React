import React from 'react'
import { EXPERIENCES } from '../constants/constants'
const Experience = () => {
  return (
    <div className=' w-full  px-2'>

    <div className='text-center'><h2 className="my-20 text-center mx-auto text-3xl md:text-4xl font-bold border-b-4 border-cyan-500 inline-block"> Experience</h2></div>
        <div>
          {EXPERIENCES.map((experience,index) => (
            <div key={index} className='pb-8 flex flex-wrap lg:justify-center'>
              <div className='w-full lg:w-1/3'>
                <p className='mb-2 text-sm text-neutral-400'> {experience.year}</p>
              </div>
              <div className='w-full max-w-xl lg:w-2/3'>
                <h2>{experience.role}-{" "}<span>{experience.company}</span></h2>
                <p className='mb-4 text-neutral-400'>{experience.description}</p>
                {experience.technologies.map((tech,index) =>(
                  <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 leading-loose text-sm font-medium text-cyan-500'>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Experience