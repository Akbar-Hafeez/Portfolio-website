import { Link } from "react-router-dom";
import React,{ useRef ,useState} from "react";

const NavLinks = () => {
return(
  <> 
   <Link to="/">Home</Link>
   <Link to="/about">About</Link>
   <Link to="/project">Project</Link>
   <Link to="/contact">Contact</Link>
   </>
)
}

export default function Nav() {
    const ref = useRef()
   const [isOpen, setIsOpen] = useState(false)
   
  const changeImage = () => {
   
    if (ref.current.src.includes("icons/menu.png")) {
      ref.current.src="icons/close.png";
     setIsOpen(!isOpen)
    }
    else{
ref.current.src="icons/menu.png";
setIsOpen(!isOpen)
    }
  
  }
  return (
    // <ul className='flex gap-5 font-bold text-2xl hover:text-gray-900 hover:text-[1.7rem] hover:underline'>
      <>
      <nav className="w-1/3">
<div className="md:flex gap-5 font-bold text-2xl hidden">
       <NavLinks/>   
       </div>
       <div className="md:hidden justify-end flex">
        <button value={isOpen}>
        <img onClick={changeImage} ref={ref}  className='w-10 h-10' src="icons/menu.png" alt="" />
        </button>
        </div>
       </nav>  
     
        {isOpen &&(
            <div className="flex flex-col items-center basis-full bg-black" > 
          <NavLinks/>   
       </div>
        )} 
    </>
)}

