import { Link } from "react-router-dom"
export default function Logo() {
  return (
    <div>
    <div className="logo font-bold cursor-pointer text-2xl " >
     <Link to="/" > <span className='text-black font-extrabold'>&lt;</span>
         <span className='px-1'>AKBAR</span>
         <span className='text-black font-extrabold'><span className='text-black font-extrabold'>/</span>&gt;</span></Link>
         </div>
 </div>
  )
}
