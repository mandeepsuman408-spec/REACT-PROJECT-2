import { Mail, Shield, UserRoundGroup } from 'lucide-react'
import React from 'react'

function Protfolio() {
    return (
        <div className='mt-40 w-full h-300 lg:h-120 flex flex-col lg:flex-row lg:justify-around '>
            <div className=' h-1/2 lg:h-full w-full lg:w-1/2 relative'>
                <img className='h-60 lg:h-60 w-60 lg:w-80 object-cover rounded-4xl' src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
                <img className='h-60 lg:h-70 w-60 lg:w-80 object-cover absolute top-40 lg:top-20 right-0 lg:right-70 rounded-4xl' src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
                <div className='w-40 flex flex-col text-center justify-center items-center capitalize bg-green-400 rounded-full py-8  px-8 absolute left-20 lg:left-40 top-80 lg:top-65 '>
                    <p className='text-2xl lg:text-4xl font-semibold'>10k+</p>
                    <p className='text-lg lg:text-xl font-semibold'>happy teams</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center lg:items-start text-center '>
                <p className='text-md bg-purple-400 rounded-3xl w-40 px-4 text-center'>About CloudTask</p>
                <h2 className='mt-4 text-4xl font-bold'>Bulit for Modern Teams </h2>
                <p className='mt-8 text-xl lg:w-120'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi repellat tenetur commodi dicta, quos repellendus porro laboriosam est eveniet velit?</p>
                <div className='mt-30 lg:mt-10'> 

                    <div className='mt-4 flex  gap-4'>
                        <UserRoundGroup className='border rounded-full px-2 py-2 h-19 w-19' />
                        <div>
                            <h4 className='text-xl font-semibold'>Trusted By 10,000+ Teams</h4>
                            <p className='mt-2 text-lg'>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <div className='mt-4 flex  gap-4'>
                        <Shield className='border rounded-full px-2 py-2 h-19 w-19' />
                        <div>
                            <h4 className='text-xl font-semibold'>Fast & Secure</h4>
                            <p className='mt-2 text-lg'>Lorem ipsum dolor sit.</p>
                        </div>
                    </div><div className='mt-4 flex gap-4 '>
                        <Mail className='border rounded-full px-2 py-2 h-19 w-19' />
                        <div>
                            <h4 className='text-xl font-semibold'>24/7 customer Support</h4>
                            <p className='mt-2 text-lg'>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Protfolio