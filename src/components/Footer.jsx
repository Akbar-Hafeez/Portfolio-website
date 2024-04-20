import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#2e0249] text-white py-8 px-2 font-[sans-serif]">
  <div className="flex flex-col items-center">
    <p className=" mb-4">Stay connected with us:</p>
    <ul className="flex space-x-4">
      <li><a href="javascript:void(0)" className="text-4xl hover:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-6 h-6"
            viewBox="0 0 24 24">
            <path fillRule="evenodd"
              d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
              clipRule="evenodd"></path>
          </svg>
        </a></li>
      <li><a href="javascript:void(0)" className="text-4xl hover:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-6 h-6"
            viewBox="0 0 24 24">
            <path fillRule="evenodd"
              d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
              clipRule="evenodd"></path>
          </svg>
        </a></li>
      <li><a href="javascript:void(0)" className="text-4xl hover:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 inline hover:fill-white w-6 h-6"
            viewBox="0 0 24 24">
            <path
              d="m10 15 5.19-3L10 9v6zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z">
            </path>
          </svg></a></li>
    </ul>
    <p className=" mt-6">&copy; 2024
         <span className='px-4'>Akbar Hafeez</span> All Rights Reserved.</p>
  </div>
</footer>
  )
}
