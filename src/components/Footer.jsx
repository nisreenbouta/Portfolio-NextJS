
import React from 'react'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';
import { BsTelephoneFill } from "react-icons/bs";
import  SparklesCore  from "./ui/sparkles";
import Link from 'next/link';
import { FaFileLines } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center  items-center  py-4 md:px-56 bg-white/30 backdrop-blur border border-pink-200  shadow-md shadow-pink-100">
        <div className="relative w-full flex flex-col justify-center items-center py-4 bg-white/30 backdrop-blur">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute top-0 left-0 w-full h-full"
        particleColor="#db2777"
      />
      <div className="relative z-10 flex flex-col justify-center items-center text-start px-4 md:text-xl text-lg w-full">
        <h2 className="font-bold font-vt323 text-4xl max-md:text-3xl mt-2 mb-4  tracking-wider">Contact Me</h2>
       <Link href="https://www.linkedin.com/in/nisreen-bouta/" target='_blank'> <h2 className="flex flex-row justify-center items-center gap-2 font-light font-vt323 tracking-wider hover:text-pink-400 duration-150 ease-linear cursor-pointer"  >
          <SiLinkedin /> LinkedIn
        </h2>
        </Link>

        <Link href="https://github.com/nisreenbouta" target='_blank'>
        <h2 className="flex flex-row justify-center items-center gap-2 font-light font-vt323 tracking-wider hover:text-pink-400 duration-150 ease-linear cursor-pointer">
          <SiGithub /> Github
        </h2>
        </Link>

        <a href='mailto:nisreen.boota@gmail.com'>
        <h2 className="flex flex-row justify-center items-center gap-2 font-light font-vt323 tracking-wider hover:text-pink-400 duration-150 ease-linear cursor-pointer">
          <SiGmail /> E-mail
        </h2>
        </a>

        <a href='/Nisreen Bouta CV- Full Stack Developer.pdf' download={"/Nisreen Bouta CV- Full Stack Developer.pdf"}>
        <h2 className="flex flex-row justify-center items-center gap-2 font-light font-vt323 tracking-wider hover:text-pink-400 duration-150 ease-linear cursor-pointer">
          <FaFileLines /> Resume
        </h2>
        </a>

        <a href='tel:+905387325913'>
        <h2 className="flex flex-row justify-center items-center gap-2 font-light font-vt323 tracking-wider hover:text-pink-400 duration-150 ease-linear cursor-pointer">
          <BsTelephoneFill /> Phone
        </h2>
        </a>

        

        <h2 className="flex flex-row justify-center items-center gap-2 font-light tracking-wider text-xs mt-6">💖 Designed & built by Nisreen Bouta</h2>
      </div>
    </div>
    </div>
  )
}

export default Footer