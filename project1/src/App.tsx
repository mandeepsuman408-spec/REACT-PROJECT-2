import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Cta from './components/Cta'
import Protfolio from './components/Protfolio'
import Activity from './components/Activity'
import Footer from './components/Footer'


type Props = {}

function App({}: Props) {
  return (
    <div className='h-full w-full bg-gray-600 lg:bg-black/40 px-4 lg:px-20 py-6 '>
      <Nav/>
      <Hero />
      <Cta />
      <Protfolio />
      <Activity />
      <Footer/>
    </div>
  )
}

export default App