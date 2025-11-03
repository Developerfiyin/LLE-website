import React from 'react'
import Frame from '../assets/Frame 13.png'
import Frame15 from '../assets/Frame 15.png'
const Hero = () => {
  return (
    <div className='bg-cover h-screen gap-10 bg-center text-center flex justify-center flex-col py-16 '  style={{ backgroundImage: `url(${Frame15})` }}>
    <div className='w-90 font-montserrat flex items-center mx-auto '>    
      <p className='text-[#A60000] rounded-full text-xl  bg-[#F6E6E6] p-2'>Welcome to Limted Leadership Eversion (LLE)</p>
 </div>
    <h1 className=' text-[rgb(58,0,0)] font-montserrat font-black text-7xl md:text-9xl mb-4 leading-tight  '>Where Young <br /> Leaders are built </h1>
    <p className='text-lg md:text-xl text-[#999999] mb-8'>A non-profit organisation aimed to equip the next generation with the character, compontence, and courage to drive growth and transform communites.</p>
       <button className='bg-[#a60000] text-white p-4 mx-auto rounded-lg hover:bg-[#3a0000] '>Partner with us</button>
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  )
}
bhwebfjnwernik
export default Hero