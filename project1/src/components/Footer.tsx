import { Heading, MoveRight, Rocket, User } from 'lucide-react'
import React from 'react'
import Footercard from './Footercard'

const footercards = [
    {
        id: 1,
        img: <User className='h-10 w-10 border rounded-3xl px-2' />,
        heading: 'Task',
        para: 'organize tasks, set properties and track progress',
        btn:'ReadMore',
    },
     {
        id: 2,
         img: <User  className='h-10 w-10 border rounded-3xl px-2' />,
         heading: 'Task',
         para: 'organize tasks, set properties and track progress',
         btn: 'ReadMore',
    },
      {
        id: 3,
          img: <User  className='h-10 w-10 border rounded-3xl px-2' />,
          heading: 'Task',
          para: 'organize tasks, set properties and track progress',
          btn: 'ReadMore',
    },
       {
        id: 4,
           img: <User  className='h-10 w-10 border rounded-3xl px-2' />,
           heading: 'Task',
           para: 'organize tasks, set properties and track progress',
           btn: 'ReadMore',
    },
        {
        id: 5,
            img: <User  className='h-10 w-10 border rounded-3xl px-2'  color='red'/>,
            heading: 'Task',
            para: 'organize tasks, set properties and track progress',
            btn: 'ReadMore',
    }
]
function Footer() {
    return (
        <div className='mt-20'>
            <div className='flex flex-col justify-center items-center'>
                <p className=' bg-purple-300  rounded-3xl px-8 py-2 text-xl  capitalize mt-4 text-center'>our service</p>
                <h3 className=' text-4xl font-semibold mt-4  text-center'>Everything You Need to Work Better</h3>
                <p className='text-xl mt-6 text-center'>Lorem, Lorem ipsum dolor sit. ipsum dolor sit amet consectetur adipisicing elit. Doloremque, unde.</p>
            </div>
            <div className='mt-20 lg:mt-40 flex flex-col lg:flex-row gap-20 justify-around items-center  '>
                {
                    footercards.map((foter) => {
                        return (
                            <Footercard img={foter.img} heading={foter.heading} para={foter.para} btn={foter.btn} />
                        )
                    }
                )
                    
            }
            </div>
            <div className='mt-20 bg-purple-300 rounded-3xl flex gap-8 flex-col lg:flex-row justify-around lg:justify-between items-center py-12 lg:py-8 px-8'>
                <div className='flex  items-center gap-8 justify-around'>
                    <div className=''>

                    <Rocket className='h-30 w-30 text-amber-50 bg-green-300 rounded-full px-6'/>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>Explore More Features</h2>
                        <p className='text-amber-50 mt-4'>Lorem ipsum dolor sit amet consecm <br /> architecto  sunt vitae optio, repellendus iusto.</p>
                    </div>
                </div>
                <div>
                    <button className='flex gap-4 bg-amber-50 px-8 py-2 rounded-4xl text-blue-400' >View All Features <MoveRight/></button>
                </div>
            </div>
        </div>
    )
}

export default Footer