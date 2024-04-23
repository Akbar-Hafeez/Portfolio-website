import React,{useRef} from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
  const ref = useRef()
  const changeImage = () => {
   
    if (ref.current.src.includes("icons/menu.png")) {
      ref.current.src="icons/close.png";
    }
    else{
ref.current.src="icons/menu.png";
    }
  
  }
  
  return (
    <nav>
        <div className="container flex place-items-center justify-between py-3">
        <div className="dropdown-icon sm:hidden ">
 <button   > 
  <img onClick={changeImage} ref={ref} className='w-12 h-12' src="icons/menu.png" alt="" />
  </button>

        <div className="logo font-bold cursor-pointer text-2xl px-6" >
        <Link to="/" > <span className='text-black font-extrabold'>&lt;</span>
            <span className='px-1'>AKBAR</span>
            <span className='text-black font-extrabold'><span className='text-black font-extrabold'>/</span>&gt;</span></Link>
            </div>
            <ul className='flex gap-5 font-bold text-2xl pr-10 '>
            <li className='hover:text-gray-900 hover:text-[1.7rem] hover:underline'><Link to="/" >Home</Link></li>
               <li className='hover:text-gray-900 hover:text-[1.7rem] hover:underline'> <Link to="/about">About</Link></li>
           <li className='hover:text-gray-900 hover:text-[1.7rem] hover:underline'> <Link to="/project">Projects</Link></li>
              <li className='hover:text-gray-900 hover:text-[1.7rem] hover:underline'>  <Link  to="/contact">Contact</Link></li>
            </ul>
            </div>
        </div>

      

       


      </nav>
   
  )
}
