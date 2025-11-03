import React from 'react'
import Frame from '../assets/Frame 13.png'
import Frame15 from '../assets/Frame 15.png'
const Hero = () => {
  return (
    <div className='bg-cover h-screen bg-center text-center flex flex-col py-16 '  style={{ backgroundImage: `url(${Frame15})` }}>
    <p className=' rounded-md p-7 bg-amber-500'>Welcome to Limted Leadership Eversion (LLE)</p>
   
    </div>
  )
}

export default Hero