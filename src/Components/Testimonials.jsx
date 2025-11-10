import React from 'react'
import ellips from '../assets/Ellipse 1131.png'
const Testimonials = () => {
  return (
    <div className='bg-[#f8f7f7] py-12 p-4 '>
    
        <div className='flex flex-col items-center text-center'>
        <p className='bg-[#ffe8d9] text-[#ff6300] rounded-md p-2 text-lg mb-3 ml-0'>Testimonals</p>
          <h2 className='font-medium text-5xl mb-9'>Their Stories. Our Success</h2>
        </div>
   
            <div className='bg-white items-center mx-auto w-60 h-90'>
                <div className='bg-[#f9f7f7] rounded-t-full mt-8 '>
                 <img src={ellips} alt="The image ellips " className='items-center mx-auto shadow-lg '/>
                </div>
         
            </div>
               
        </div>
  )
}

export default Testimonials