import React, { type ReactNode } from 'react'

type Props = {
    img: ReactNode,
    heading: string,
    para: string,
    btn:string,
}

function Footercard({img,heading,para,btn}: Props) {
  return (
    <div className=''>
          {img}
          <h4 className=' mt-4 text-4xl font-semibold'>{ heading}</h4>
          <p className='mt-4 w-55 text-xl'>{ para}</p>
          <button className='mt-4 text-xl text-purple-300 '>{ btn}</button>
    </div>
  )
}

export default Footercard