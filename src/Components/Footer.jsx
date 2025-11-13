import React from 'react'
import button from '../assets/Button.png'
import twitter from '../assets/twitter.png'
import Instagram  from '../assets/instagram.png'

const Footer = () => {
  return (
    <div className='py-12  bg-[#F8F7F7] p-8 gap-9 grid lg:grid-cols-3'>
    <div className='flex flex-col m-9 mt-0 gap-3'>  
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

      <div className='ml-3 text-[#3a0000] p-6 font-semibold'>
        <h5 className=' font-medium text-xl '>Quick Link</h5>
          <h6 className='p-4'>Home</h6>
          <h6 className='p-4'>About us</h6> 
          <h6 className='p-4'>Events</h6>
          <h6 className='p-4'>Contact Us</h6>
      </div>


   <div>
    <h5></h5>
  </div>
    </div>
  )
}

export default Footer