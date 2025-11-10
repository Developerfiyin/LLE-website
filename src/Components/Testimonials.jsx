import React from 'react'
import ellips from '../assets/Ellipse 1131.png'
const Testimonials = () => {
  return (
    <div className='bg-[#f8f7f7] py-12 p-4 '>
    
        <div className='flex flex-col items-center text-center'>
        <p className='bg-[#ffe8d9] text-[#ff6300] rounded-md p-2 text-lg mb-3 ml-0'>Testimonals</p>
          <h2 className='font-medium text-5xl mb-9'>Their Stories. Our Success</h2>
        </div>
   
            <div className='flex'>
             <div className='bg-[#f8f7f7] mx-auto items-center'>
             <img src={ellips} alt="The image ellips"className='items-center rounded-t-full shadow-lg mx-auto '/>
                </div>
              <div className='bg-white items-center text-center mx-auto w-120 h-90'>
                 <h4 className='text-[#1a1a1a] text-xl font-medium pt-12'>~Babatunde O.</h4>
                 <h6 className='text-[#1a1a1a] mb-15'>LLE Symposium</h6>
                 <h3 className='font-medium text-xl'>“The Masterclass was the best I have <br />
                  experienced this year. To say I enjoyed my <br />
                   evening would be an understatement, really!!”</h3>
               </div>
               
               <div className='bg-[#f8f7f7] mx-auto items-center'>
                 <img src={ellips} alt="The image ellips"className='items-center rounded-t-full shadow-lg mx-auto '/>
                </div>
            <div className='bg-white items-center text-center mx-auto w-120 h-90'>
                 <h4 className='text-[#1a1a1a] text-xl font-medium pt-12'>~Babatunde O.</h4>
                 <h6 className='text-[#1a1a1a] mb-15'>LLE Symposium</h6>
                 <h3 className='font-medium text-xl'>“The Masterclass was the best I have <br />
                  experienced this year. To say I enjoyed my <br />
                   evening would be an understatement, really!!”</h3>
            </div>
            <div className='bg-[#f8f7f7] mx-auto items-center'>
             <img src={ellips} alt="The image ellips"className='items-center rounded-t-full shadow-lg mx-auto '/>
                </div>
            <div className='bg-white items-center text-center mx-auto w-120 h-90'>
                 <h4 className='text-[#1a1a1a] text-xl font-medium pt-12'>~Babatunde O.</h4>
                 <h6 className='text-[#1a1a1a] mb-15'>LLE Symposium</h6>
                 <h3 className='font-medium text-xl'>“The Masterclass was the best I have <br />
                  experienced this year. To say I enjoyed my <br />
                   evening would be an understatement, really!!”</h3>
            </div>


        </div>
  )
}

export default Testimonials