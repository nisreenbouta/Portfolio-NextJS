import Image from 'next/image'
import React from 'react'
import { LuGithub } from "react-icons/lu";

const About = () => {
  return (
    <div id='about' className=' mt-8'>
        <div className='flex flex-col items-center  w-full'>
           
            <div className=' flex flex-row max-w-5xl gap-4 bg-gradient-to-b from-white via-pink-200 to-white border-1 border-gray-200 rounded-lg '>
                <div className=' w-full'>
                    <Image alt='' src={"/about-pic.jpg"} className=' object-cover rounded-lg' width={500} height={500} />
                </div>
                <div className=' w-full text-start text-neutral-700 py-28 mx-4' >
                    <h2 className=' w-full text-start tracking-wide  text-neutral-800 mb-4 font-vt323 text-4xl '>About Me</h2>
                    Software Engineer with expertise in .NET Core, Vue JS v2, and React Native. Proven ability to design, develop, and implement end-to-end solutions 
                    across web, mobile, and database platforms, ensuring optimal performance and user experience.
                    <h2 className=' w-full text-start tracking-wide  text-neutral-800 mt-4 font-vt323 text-4xl'>Technologies I use</h2>
                    <div className=' flex flex-row gap-1 mt-2'>
                        <LuGithub/>
                        <LuGithub/>
                        <LuGithub size={22}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About