import { Check, MoveRight } from 'lucide-react'
import React from 'react'

function Cta() {
    return (
        <div className=' lg:h-auto mt-6 lg:mt-20 w-full flex gap-20 flex-col lg:flex-row items-center lg:px-8'>
            <div className=' w-full lg:w-1/3 bg-green-500 py-8 lg:py-12 px-4 lg:px-8 rounded-2xl '>
                <div className='flex justify-between gap-8'>
                    <img className='h-16 w-16' src="https://www.svgrepo.com/show/446808/telegram.svg" alt="" />
                    <div>
                        <h4 className='text-4xl'>Ready to get  started</h4>
                        <p className='mt-4 text-xl leading-8'>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Libero, reprehenderit?</p>
                    </div>
                </div>
                <div className='mt-8 flex justify-between items-center gap-4 bg-amber-50 rounded-4xl py-2 lg:py-4 px-4 lg:px-6'>
                    <p>Your email address</p>
                    <button className='hover:bg-blue-400 rounded-4xl lg:px-8 lg:py-2'>Create Account</button>
                </div>

            </div>
            <div className=' flex flex-col gap-12 lg:flex-row lg:justify-around '>
                <div className=' flex flex-col justify-between gap-6 text-lg font-medium'>
                    <p className='flex gap-2'><Check className='text-green-300'/> Task Managment</p>
                    <p className='flex gap-2'><Check className='text-green-300' />Team collaboration</p>
                    <p className='flex gap-2'><Check className='text-green-300' />file sharing</p>
                    <p className='flex gap-2'><Check className='text-green-300' />Real Time</p>
                    <p className='flex gap-2'><Check className='text-green-300' />Mobile Access</p>
                </div>
                <div className='lg:w-1/3 lg:px-4 flex flex-col justify-around items-center lg:items-start'>
                    <h3 className='text-4xl font-bold'>How its Work?</h3>
                    <p className='text-lg lg:text-xl mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolore eos ea et. Aut, non!</p>
                    <button className='mt-8 flex gap-4 text-purple-300'>Learn More <MoveRight/></button>
                </div>
            </div>

        </div>
    )
}

export default Cta