import { ArrowBigDown, MoveRight, Play,  } from 'lucide-react'
import React, { Component } from 'react'

export class Hero extends Component {
  render() {
    return (
        <div className='h-350 lg:h-190 w-full flex flex-col verse lg:flex-row-reverse items-center justify-center lg:justify-around py-20 lg:py-40  '>
            <div className='h-1/2 lg:h-full w-full lg:w-1/2 flex justify-center items-center' >
                <img className='h-full w-full lg:w-1/2  object-cover rounded-2xl ' src="https://images.unsplash.com/photo-1791795539614-fc7a3bdefec8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            </div>
            <div className='h-1/2 lg:h-full w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start'>
                
                <div>
                    <p className='text-2xl  bg-amber-50 px-4 py-2 rounded-3xl'>Boost Productivity</p>
                </div>
            <h2 className='text-4xl lg:text-6xl font-semibold mt-4'>Manage Your Work Smarter,<span>Not Harder</span></h2>
            <p className='text-xl lg:text-2xl text-blue-200 font-semibold mt-6 lg:leading-9'> Lorem ipsum consectetur adipisicing elit. Sequi, fuga tempore? Deleniti rerum voluptate doloribus. Exercitationem officiis delectus sint esse.</p>
            <div className='flex gap-4 mt-8'>
                <button className='flex rounded-full py-1 lg:py-5 px-2 lg:px-12 gap-2 lg:gap-4 bg-gray-400 hover:bg-blue-300 hover:text-purple-300 text-green-100'>Get Started Free <MoveRight/></button>
                    <button className='flex rounded-full py-1 lg:py-5 px-2 lg:px-12 gap-2 lg:gap-4 bg-gray-400 hover:bg-blue-300 hover:text-purple-300 text-green-100'><Play/> Watch Demo</button>
            </div>
            </div>
      </div>
    )
  }
}

export default Hero