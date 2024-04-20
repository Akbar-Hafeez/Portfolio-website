import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    
      <nav>
        <div className="container flex place-items-center justify-between py-3">
        <div className="logo font-bold cursor-pointer text-2xl px-6">
            <span className='text-black font-extrabold'>&lt;</span>
            <span >AKBAR</span>
            <span className='text-black font-extrabold'><span className='text-black font-extrabold'>/</span>&gt;</span>
            </div>
            <ul className='flex gap-5 font-bold text-2xl pr-10'>
            <li className='hover:font-extrabold'><Link to="/" >Home</Link></li>
               <li className='hover:font-extrabold'> <Link to="/about">About</Link></li>
           <li className='hover:font-extrabold'> <Link to="/project">Projects</Link></li>
              <li className='hover:font-extrabold'>  <Link  to="/contact">Contact</Link></li>
            </ul>
        </div>
      </nav>
   
  )
}
