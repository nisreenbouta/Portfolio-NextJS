import React from 'react'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center  items-center  py-4 md:px-56 bg-white/30 backdrop-blur border border-pink-200 ">
        <div className="flex flex-col justify-center  items-center text-start px-4 md:text-lg text-sm w-full">
            <h2 className='  font-light font-vt323 text-xl my-4 md:text-4xl tracking-wide '>Contact Me</h2>

            <h2 className=' flex flex-row  justify-center  items-center gap-2 font-bold font-arsenal tracking-wide hover:text-pink-400 duration-150 ease-linear cursor-pointer'><SiLinkedin/> LinkedIn</h2>
            <h2 className=' flex flex-row  justify-center  items-center gap-2 font-bold font-arsenal tracking-wide hover:text-pink-400 duration-150 ease-linear cursor-pointer'><SiGithub/> Github</h2>
            <h2 className=' flex flex-row  justify-center  items-center gap-2 font-bold font-arsenal tracking-wide hover:text-pink-400 duration-150 ease-linear cursor-pointer'><SiGmail/> E-mail</h2>
            <h2 className=' flex flex-row  justify-center  items-center gap-2 font-bold font-arsenal tracking-wide hover:text-pink-400 duration-150 ease-linear cursor-pointer'><BsTelephoneFill/>Phone</h2>
        </div>
    </div>
  )
}

export default Footer