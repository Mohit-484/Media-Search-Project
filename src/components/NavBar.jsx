import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
     <div className='flex justify-between items-center py-6 px-10 bg-(--c2)'> 
         <h2 className='font-bold text-3xl'>MediaSearch</h2>
        <div className='flex gap-5 text-xl items-center'>
            <Link className='text-base font-medium active:scale-95 bg-(--c1) text-white rounded px-4 py-2 hover:bg-gray-950' to='/collection'>Collection</Link>
            <Link className='text-base font-medium active:scale-95 bg-(--c1) text-white rounded px-4 py-2 hover:bg-gray-950' to='/'>Search</Link>
        </div>
       </div> 
  )
}

export default NavBar
