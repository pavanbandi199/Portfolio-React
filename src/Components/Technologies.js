import React from 'react'
import { FaReact,FaHtml5,FaCss3Alt,FaBootstrap,FaGithub     } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandJavascript  } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
const Technologies = () => {
  return (
    <div className=' pb-14  flex justify-center items-center flex-col'>
        {/* <h1 className='py-5 text-center text-4xl'>Technologies</h1> */}
        <div className='text-center'><h2 className="my-20 text-center mx-auto text-3xl md:text-4xl font-bold border-b-4 border-cyan-500 inline-block"> My Skills </h2></div>
        <div className='flex flex-wrap items-center justify-center gap-4 my-10'>
            
            <div className='rounded-2xl border-4 border-neutral-700 p-4'>
                <FaHtml5 className='text-5xl text-[#e34c26]' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-700 p-4'>
                <FaCss3Alt  className='text-5xl text-[#264de4]' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-700 p-4'>
                <TbBrandJavascript  className='text-5xl text-yellow-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-700 p-4'>
                <FaReact className='text-5xl text-cyan-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-700 p-4'>
                <FaGithub  className='text-5xl ' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-700 p-4'>
                <FaBootstrap className='text-5xl text-[#6610f2]' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-700 p-4'>
                <RiTailwindCssFill className='text-5xl text-cyan-400' />
            </div>
            <div className='group rounded-2xl border-4 border-neutral-700 p-4'>
                <RiNextjsFill  className='text-5xl ' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-700 p-4'>
                {/* <TbBrandFramerMotion  className='text-5xl ' /> */}
                <svg  height="48" viewBox="3.7 3.7 43.6 43.6" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d"/><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4"/><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96"/></svg>
            </div>
        </div>
    </div>
  )
}

export default Technologies