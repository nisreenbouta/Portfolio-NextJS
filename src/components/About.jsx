import Image from 'next/image';
import React from 'react';
import { SiDotnet, SiGithub, SiHtml5, SiReact,SiVuetify,SiVuedotjs,SiCsharp, SiTailwindcss, SiPostgresql, SiFigma, SiAdobexd, SiCss3, SiPostman,  } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const About = () => {
  return (
    <div >
        <div id='about' className='my-28 text-white'>About  </div>
        <div  className=' mt-8 '>
        <div className='flex flex-col  items-center  w-full  '>
           
            <div className=' shadow-md shadow-pink-100 flex max-md:flex-col flex-row md:max-w-5xl gap-4 bg-gradient-to-r from-white via-pink-200 max-md:pb-8 to-white md:bg-gradient-to-b md:from-white md:via-pink-200 md:to-white border-1 border-gray-200 rounded-lg '>
                <div className=' flex flex-row w-full'>
                    <Image alt='' src={"/about-pic.jpg"} className='  rounded-lg' width={500} height={500} />
                </div>
                <div className=' w-full text-start max-md:text-center font-semibold text-neutral-500 md:py-28 px-2   ' >
                    <h2 className=' w-full  font-normal tracking-wider  text-neutral-800 mb-4 font-vt323 text-4xl  '>About Me</h2>
                    <p className='px-4'>Software Engineer with expertise in .NET Core, Vue JS v2, and React Native. Proven ability to design, develop, and implement end-to-end solutions 
                    across web, mobile, and database platforms, ensuring optimal performance and user experience.</p>
                    <h2 className=' w-full tracking-wider font-normal text-neutral-800 my-4 font-vt323 text-4xl'>Technologies I use</h2>
                        <div className=' text-neutral-400 text-xl md:text-2xl flex flex-row max-md:flex-wrap max-md:justify-center gap-1 mt-2 items-center px-4'>
                            <SiReact />
                            <SiGithub />
                            <SiDotnet />
                            <SiHtml5  />
                            <SiVuetify  />
                            <SiVuedotjs />
                            <SiCsharp />
                            <TbBrandReactNative />
                            <SiTailwindcss />
                            <SiPostgresql />
                            <SiFigma />
                            <SiAdobexd />
                            <SiCss3 />
                            <SiPostman />
                        
                        </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About