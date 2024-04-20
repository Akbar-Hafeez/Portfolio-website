import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif]  max-w-5xl max-md:max-w-md mx-auto">
      <div className="max-md:order-1 max-md:text-center f">
        <h1 className='text-6xl custom'>I'm</h1>
        <h1  className="text-6xl my-7 custom ">
          AKBAR HAFEEZ.
          </h1>
        <h2 className="mt-4 custom">A Full Stack Developer</h2>
        <button type="button " className=" w-max px-6 py-2 mt-8 font-extrabold  text-lg button flex "><Link to="/about">About Me</Link></button>
      </div>
      <div className="md:h-[545px]">
        <img src="https://readymadeui.com/photo.webp" className="w-full h-full md:object-contain" />
      </div>
    </div>
    
  )
}
