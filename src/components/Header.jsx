import React from 'react'

import Nav from './Nav'
import Logo from './Logo'

export default function Header() {
  return (
    <div className='flex sticky top-0 justify-between items-center z-[20] mx-auto w-full px-6 py-3 flex-wrap '>
     <Logo/>
      <Nav/>
    </div>
  )
}
