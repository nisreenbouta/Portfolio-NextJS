import React from 'react'

const Header = () => {
  return (
    <div className="w-full z-50 sticky top-0 mt-2 rounded-lg py-4 md:px-56 mx-auto bg-white/30 backdrop-blur">
        <div className="flex flex-row justify-between px-4 items-center md:text-lg text-sm">
            <a href='#about'>
                <h2 className=' font-bold font-arsenal tracking-wide hover:text-pink-400 duration-150 ease-linear cursor-pointer'>About</h2>
            </a>
            <h2 className=' font-light font-vt323 text-xl md:text-4xl tracking-wide  hover:text-pink-400 duration-150 ease-linear cursor-pointer'>Nisreen Bouta</h2>
            <a href='#projects'>
                <h2 className=' font-bold font-arsenal tracking-wide hover:text-pink-400 duration-150 ease-linear cursor-pointer'>Projects</h2>
            </a>
        </div>
    </div>

  )
}

export default Header