import React from 'react'
import img1 from '../assets/project1.png'
import img2 from '../assets/project2.png'
import img4 from '../assets/project4.png'
import img5 from '../assets/project5.png'
const Projects = () => {

  const handleClick =()=>{

  }

  return (
    <div className=' max-w-screen-xl mx-auto  px-2'>
        <div className='text-center'><h2 className="mt-20 mb-10 text-center mx-auto text-3xl md:text-4xl font-bold border-b-4 border-cyan-500 inline-block"> Projects</h2></div>
        <div className='max-w-screen-xl flex flex-wrap'>
          <div className='group flex bg-gradient-to-r from-cyan-500 to-blue-500 p-1 max-w-lg mx-auto my-5 rounded-xl cursor-pointer hover:scale-105 hover:rotate-3 duration-300'>
            <div className='flex bg-black rounded-xl'>
              <div onClick={handleClick} className='  '>
                <img src={img1} className='rounded-xl group-hover:blur-lg' alt='project1' />
                <a href='https://services-project.vercel.app/' target='_blank' rel="noreferrer" className='absolute opacity-0 group-hover:opacity-100 top-[50%] left-[36%] font-bold text-2xl'>Live Preview</a>
              </div>
            </div>
          </div>
          <div className='group flex bg-gradient-to-r from-cyan-500 to-blue-500 p-1 max-w-lg mx-auto my-5 rounded-xl cursor-pointer hover:scale-105 hover:-rotate-3 duration-300'>
            <div className='flex bg-black rounded-xl'>
              <div className='  '>
                <img src={img2} className='rounded-xl group-hover:blur-lg' alt='project1' />
                <a href='https://scintillating-haupia-391d6d.netlify.app/' target='_blank' rel="noreferrer" className='absolute opacity-0 group-hover:opacity-100 top-[50%] left-[36%] font-bold text-2xl '>Live Preview</a>
              </div>
            </div>
          </div>   
        </div>
        <div className='max-w-screen-xl flex flex-wrap'>
          <div className='group flex bg-gradient-to-r from-cyan-500 to-blue-500 p-1 max-w-lg mx-auto my-5 rounded-xl cursor-pointer hover:scale-105 hover:rotate-3 duration-300'>
            <div className='flex bg-black rounded-xl'>
              <div className=' text-black  '>
                <img src={img5} className='rounded-xl group-hover:blur-lg' alt='project1'/>
                <a href='https://creative-faloodeh-6c94c2.netlify.app/' target='_blank' rel="noreferrer" className='absolute opacity-0 group-hover:opacity-100 top-[50%] left-[36%] font-bold text-2xl '>Live Preview</a>
              </div>
            </div>
          </div>
          <div className='group flex bg-gradient-to-r from-cyan-500 to-blue-500 p-1 max-w-lg mx-auto my-5 rounded-xl cursor-pointer hover:scale-105 hover:rotate-3 duration-300'>
            <div className='flex bg-black rounded-xl'>
              <div className='  '>
                <img src={img4 } className='rounded-xl group-hover:blur-lg h-full' alt='project1'/>
                <a href='https://scintillating-haupia-391d6d.netlify.app/' target='_blank' rel="noreferrer" className='absolute opacity-0 group-hover:opacity-100 top-[50%] left-[36%] font-bold text-2xl '>Live Preview</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects
//<div className='absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] bg-neutral-600'>Live Preview</div>
//<div className='bg-gray-500 w-full h-full absolute '> text</div>