import React from 'react'
import button from '../assets/Button.png'
import twitter from '../assets/twitter.png'
import Instagram  from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'

const Footer = () => {
  return (
    <>
    <div className='py-12 flex bg-[#F8F7F7] p-8 gap-9 '>
    <div className='flex flex-col m-6 mt-0 gap-3'>  
     <p className='text-[#999] text-xl mb-8'>Limitless Leadership Eversion (LLE) is  a non-profit organization <br />
        dedicated to developing young adults into  capable, effective, and <br />
         efficient  leaders across all social systems. We recognize that <br />
      leadership is the  most vital role in every society. Hence, LLE is <br />
     founded on an incurable drive to strengthen and uphold the   <br />
     pillar of  leadership, ensuring progress and  prosperity at every level.</p>
         
         <div className='flex gap-6 '>
      <img src={button} alt="" className='w-10 h-10' />
     <img src={twitter} alt="THE TWITTER ICON" className='w-10 h-10' />
     <img src={Instagram} alt="THE INSTAGRAM ICON"className='w-10 h-10' />
     <img src={button} alt="THE LINKDEIN ICON" className='w-10 h-10' />
        </div>
    </div>

      <div className='text-[#3a0000] p-6 font-semibold'>
        <h5 className=' font-medium text-xl '>Quick Link</h5>
          <h6 className='p-2'>Home</h6>
          <h6 className='p-2'>About us</h6> 
          <h6 className='p-2'>Events</h6>
          <h6 className='p-2'>Contact Us</h6>
      </div>


   <div className='text-[#3a0000] p-6'>
    <h5 className='text-3xl font-medium mb-5'>Get in Touch</h5>
   <p className='p-2'>Email Address</p>
   <p className='p-2'> Email: limitlessleadershipeversionn@gmail.com</p>
   <p className='p-2'>Contact: 08133518773</p>
  </div> 
    </div>
     <p className='w-full text-[#3a0000] text-center border-t-4 border-[#3a0000]'>@ copyright 2025. All rights reserved  </p>

    </>
  )
}

export default Footer