import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className=" grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif]  max-w-5xl max-md:max-w-md mx-auto">
      <div className="max-md:order-1 max-md:text-center md:ml-20 lg:ml-0">
        <h1 className='text-6xl custom animate__animated animate__slideInDown animate__delay-1s'>I'm</h1>
        <h1  className="text-6xl my-7 custom animate__animated animate__zoomInDown ">
          AKBAR HAFEEZ.
          </h1>
        <h2 className="mt-4 custom animate__animated animate__slideInUp animate__delay-1s">A Full Stack Developer</h2>
        <button type="button " className="flex w-max mx-36 md:mx-0 md:mb-0 mb-8 px-6 py-2 mt-8  font-extrabold  text-lg button  "><Link to="/about">About Me</Link></button>
      </div>
      <div className="md:h-[545px] md:mr-20 lg:mr-0">

        <div className='h-[80%] w-[80%] mt-10 md:ml-20 mx-10 animate__animated animate__rotateIn'><img className="  w-full h-full md:object-contain shadow-lg shadow-cyan-500/50 " src="../icons/home-image.png" alt='image'  />
        </div>
      </div>
    </div>
    
  )
}
