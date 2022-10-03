import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
  experiences:Experience[];
}

function WorkExperience({experiences}: Props) {
  return (
    <motion.div 
     initial={{
      y:-100,
      opacity:0
    }}
    whileInView={{
      opacity:1, y:0
    }}
    transition={{
      duration:1.2
    }}
    viewport={{
      once:true
    }}
    className='h-screen flex relative overflow-hidden flex-col text-left 
    md:flex-row max-w-full justify-evenly mx-auto items-center px-10'>
        <h3 
          className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          {experiences?.map((experience)=>(
            <ExperienceCard key={experience?._id} experience={experience}/>
          ))}
    
        </div>
    </motion.div>
  )
}

export default WorkExperience