import { Download } from 'lucide-react'
import React from 'react'

function Nav() {
  return (
      <div className='flex justify-around lg:justify-between items-center'>
          <div>
              <h2 className='text-2xl lg:text-3xl font-bold leading-6'>Cloud<span className='text-green-400'>Task</span> <br /> <span className='text-lg text-green-200  '> Work Smarter</span></h2>
          </div>
          <div className='hidden lg:block justify-between items-center space-x-4 text-gray-100  '>
              <button className='hover:text-green-400 hover:underline- '>Home</button>
              <button className='hover:text-green-400 hover:underline- '>About</button>
              <button className='hover:text-green-400 hover:underline- '>Servives</button>
              <button className='hover:text-green-400 hover:underline- '>Pricing</button>
              <button className='hover:text-green-400 hover:underline- '>Blog</button>
              <button className='hover:text-green-400 hover:underline- '>Contact</button>
          </div>
          <div>
              <button className=' border rounded-full flex justify-between items-center gap-2 bg-green-300 px-2 lg:px-8 py-2 lg:py-4'><Download/> Download App</button>
              
          </div>
    </div>
  )
}

export default Nav