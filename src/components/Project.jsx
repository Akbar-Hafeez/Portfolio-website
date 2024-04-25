import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Project() {
 
  
    
  //   navigator.clipboard.writeText(text)
  //   alert("i m clicked")
    // alert(text)
    // toast.success('Copied to Clipboard!', {
    //   position: "top-right",
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    //   // transition: Bounce,
    //   })

  
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
<ToastContainer />
    <div className="font-[sans-serif]  text-[#333] py-2 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="custom md:text-5xl text-3xl font-extrabold md:!leading-[55px]  animate__animated animate__fadeInDown">My Projects</h2>
        
      </div>
      <div className="xl:max-w-7xl max-w-5xl mx-auto ">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 mt-14">
          <div className="p-6 bg-gray-300 rounded-md">
            <img className='h-[13rem] w-full' src="../icons/passop.png" alt="icon" />
            <h3 className="custom text-xl font-extrabold my-2.5 text-[#a91079]">Pass OP</h3>
            <div className=''>
              <button className="button" ><img src="../icons/url.png" alt=""  /><a className='w-[70%]'  href="https://the-text-modo.web.app/" target='_blank' >https://the-text-modo.web.app/</a><img  className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt=""   /></button>
              <button className="button" ><img src="../icons/github.png" alt=""  /><a className='w-[70%]'  href="https://the-text-modo.web.app/" target='_blank' >github.com/Akbar-Hafeez/Pass-OP</a><img  className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt=""   /></button>
              </div>
          </div>
          <div className="p-6 bg-gray-300 rounded-md">
            <img className='h-[13rem] w-full' src="../icons/twitter.png" alt="icon" />
            <h3 className="custom text-xl font-extrabold my-2.5 text-[#a91079]">Twitter Clone</h3>
            <div className=''>
              <button className="button" ><img src="../icons/url.png" alt=""  /><a className='w-[70%]' 
                href="https://twitter-clone-b133e.web.app/" target='_blank'> https://twitter-clone-b133e.web.app/</a><img  className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt="" /></button>
             
              <button className="button" ><img src="../icons/github.png" alt=""  /><a className='w-[70%]'  href="https://github.com/Akbar-Hafeez/twitter-clone" target='_blank'> github.com/Akbar-Hafeez/twitter-clone</a><img   className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt="" /></button>
              </div>
          </div>
         <div className="p-6 bg-gray-300 rounded-md">
            <img className='h-[13rem] w-full' src="../icons/todolist.png" alt="icon" />
            <h3 className="custom text-xl font-extrabold my-2.5 text-[#a91079]">To Do List</h3>
            <div className=''>
              <button className="button" ><img src="../icons/url.png" alt=""  /><a className='w-[70%]'  href="https://t0-d0-list.web.app/" target='_blank'>https://t0-d0-list.web.app/</a><img  className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt=""  /></button>
              <button className="button" ><img src="../icons/github.png" alt=""  /><a className='w-[70%]'  href="https://github.com/Akbar-Hafeez/To-Do-APP" target='_blank'>github.com/Akbar-Hafeez/To-Do-APP</a><img   className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt=""  /></button>
              </div>
          </div>
          <div className="p-6 bg-gray-300 rounded-md">
            <img className='h-[13rem] w-full' src="../icons/textmodo.png" alt="icon" />
            <h3 className="custom text-xl font-extrabold my-2.5 text-[#a91079]">Text Modo</h3>
            <div className=''>
              <button className="button" ><img src="../icons/url.png" alt=""  /><a className='w-[70%]'  href="https://the-text-modo.web.app/" target='_blank'>https://the-text-modo.web.app/</a><img  className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt=""  /></button>
              <button className="button" ><img src="../icons/github.png" alt=""  /><a className='w-[70%]'  href="https://github.com/Akbar-Hafeez/TextModo" target='_blank'>github.com/Akbar-Hafeez/TextModo</a><img   className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt=""  /></button>
              </div>
          </div>
          <div className="p-6 bg-gray-300 rounded-md">
            <img className='h-[13rem] w-full' src="../icons/newscity.png" alt="icon" />
            <h3 className="custom text-xl font-extrabold my-2.5 text-[#a91079]">News City</h3>
            <div className=''>
              <button className="button" ><img src="../icons/url.png" alt=""  /><a className='w-[70%]'  href="" ></a><img  className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt=""  /></button>
              <button className="button" ><img src="../icons/github.png" alt=""  /><a className='w-[70%]'  href="https://github.com/Akbar-Hafeez/News-City" target='_blank'>github.com/Akbar-Hafeez/News-City</a><img   className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt=""  /></button>
              </div>
          </div>
          <div className="p-6 bg-gray-300 rounded-md">
            <img className='h-[13rem] w-full' src="../icons/portfolio.png" alt="icon" />
            <h3 className="custom text-xl font-extrabold my-2.5 text-[#a91079]">Portfolio Website</h3>
            <div className=''>
              <button className="button" ><img src="../icons/url.png" alt=""  /><a className='w-[70%]'  href="https://twitter-clone-b133e.web.app/" target='_blank'>https://twitter-clone-b133e.web.app/</a><img  className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt=""  /></button>
              <button className="button" ><img src="../icons/github.png" alt=""  /><a className='w-[70%]'  href="https://github.com/Akbar-Hafeez/twitter-clone" target='_blank'>https://github.com/Akbar-Hafeez/twitter-clone</a><img   className='w-[32px] h-[32px] flex ' src="../icons/copy.gif" alt=""  /></button>
              </div>
          </div>
          
          
        </div>
        </div>
      </div>
      </>
  )
}



