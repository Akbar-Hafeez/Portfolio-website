import React from 'react'
import useDownloader from 'react-use-downloader';


export default function About() {
 
  const {  percentage, download, cancel, error,  } =
  useDownloader();

const fileUrl =
  'icons/passop.png';
const filename = 'Akbar Hafeez Resume';
  return ( 
    <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif]  max-w-5xl max-md:max-w-md mx-auto">
      <div className="max-md:order-1 max-md:text-center ">
        <h1  className="text-6xl custom animate__animated animate__fadeInTopLeft">
          Summary
          </h1>
        <h2 className="mt-4 custom animate__animated animate__fadeInTopRight animate__delay-1s"> I am a Full Stack Developer with over 6 months of experience in software development and proficiency in development tools. I love to build products that solves or attempts to solve real life problems. I am a strong believer in teamwork and community building and i have craze of Learning .
 I have experience in Frontend (HTML, CSS, Javascript, React ,Bootstrap ,Tailwind CSS), Backend(Node.Js,ExpressJs,Mongoose), Databases(MongoDb).</h2>
        {/* <div>
          <button type="button " className=" w-max px-6 py-2 mt-8 font-extrabold  text-lg button flex ">Download my CV</button>
        </div> */}
         <div className="download-cv">
      
      <button className='w-max px-6 py-2 mt-8 font-extrabold  text-lg button flex ' type='button'  onClick={() => download(fileUrl, filename)}>
     <span onClick={() => download(fileUrl, filename)}> Download my CV </span>
    </button>
      {error && <p>possible error {JSON.stringify(error)}</p>}
    </div>
      </div>

      <div className="md:h-[600px]">
      <div class="about ">
      
  
      <div  class="box ">
        <div>
          <span className='custom '>HTML/CSS</span>
          <span className='custom'>Javascript</span>
          <span className='custom'>Bootstrap</span>
          <span className='custom'>Tailwind</span>
          <span className='custom'>React Js</span>
          <span className='custom'>Node Js</span>
          <span className='custom'>Express</span>
          <span className='custom'>MongoDb</span>
        
       
      

    </div>
      </div>
          </div>
          </div>
          </div>
   
    
      
  )
}
