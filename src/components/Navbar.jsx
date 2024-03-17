import React from 'react'

function Navbar() {
  return (
   <nav className='flex justify-between bg-blue-900 text-white py-2 hover:font-bold'>
   <div className='logo'>
    <span className='font-bold text-xl mx-8'>iTask</span>
   </div>
<ul className='flex gap-8 mx-9 py-5'>
 <li className='cursor-pointer hover:font-bold '>Home</li>
 <li className='cursor-pointer hover:font-bold '>Your Tasks</li>
    </ul>
   </nav>
  )
}

export default Navbar
