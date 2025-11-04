import React from 'react'
import img1 from '../assets/Rectangle 21.png'
import img2 from '../assets/Rectangle 22.png'
import img3 from '../assets/Rectangle 23.png'
import img4 from '../assets/Rectangle 24.png'
import Frame15 from '../assets/Frame 15.png'
const Hero = () => {
  
  return (
    <div className='bg-cover h-screen relative gap-10 bg-center text-center flex justify-center flex-col py-16 px-4'  style={{ backgroundImage: `url(${Frame15})` }}>
    <div className='w-90 font-montserrat flex text-center mx-auto'>    
      <p className='mt-90 text-[#A60000] rounded-full text-xl border-t border-grey-800 bg-[#F6E6E6] p-2'>Welcome to Limted Leadership Eversion (LLE)</p>
 </div>
    <h1 className='text-[hsl(0,100%,11%)] font-montserrat font-black text-7xl md:text-9xl mb-4 leading-tight'>Where Young <br /> Leaders are built </h1>
    <p className='text-lg md:text-xl text-[#999999] mb-8'>A non-profit organisation aimed to equip the next generation with the character, compontence, and courage to drive growth and transform communites.</p>
       <button className='bg-[#a60000] text-white p-4 mx-auto rounded-lg hover:bg-[#3a0000] '>Partner with us</button>
      
      <div className='flex overflow-hidden space-x-16'>
           <div className='flex justify-center gap-4 animate-loop-scroll'>
         <img src={img1} alt="The rectangle image from figma" className='max-w-none' />
         <img src={img2} alt="The rectangle image from figma" className='max-w-none' />
         <img src={img3} alt="photo of the student from the figma design" className='max-w-none' />
         <img src={img4} alt="photo of the audience fromt the figma design" className='max-w-none' />
       </div>
        
          <div className='flex justify-center gap-4 animate-loop-scroll'>
         <img src={img1} alt="The rectangle image from figma" className='max-w-none' />
         <img src={img2} alt="The rectangle image from figma" />
         <img src={img3} alt="photo of the student from the figma design" />
         <img src={img4} alt="photo of the audience fromt the figma design" />
       </div>
      </div>
         
     
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  )   
}

export default Hero