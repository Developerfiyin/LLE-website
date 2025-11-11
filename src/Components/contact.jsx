import React from 'react'
import email from '../assets/email.png'
import call from '../assets/call-02.png'
import button from '../assets/Button.png'
import twitter from '../assets/twitter.png'
import Instagram  from '../assets/instagram.png'
import { FaUser } from "react-icons/fa";

const contact = () => {
  return (
    <section className='flex justify-evenly py-12 '>
    <div className=' bg-[#F8F7F7] flex flex-col m-9 '>

      <div className='flex flex-col p-6 '>
       <p className='bg-[#ffe8d9] text-[#ff6300] rounded-lg mx-auto p-2 mb-3 ml-0'>Contact Us</p>
        <h2 className='text-[#3a0000] font-medium  mb-9'>Feel Free To Contact Us Anytime.</h2>

        <div className='flex gap-3'>
       <img src={email} alt="The email icon" className='size-9' />
       <div className=''>
        <h6 className='font-medium text-[#3a0000] '>Chat Now</h6>
        <p className='text-sm text-[#3a0000] '>Kinkan@gmail.com</p>
       </div>

       <img src={call} alt="The email icon" className='size-6' />
       <div className=''>
        <h6 className='font-medium text-[#3a0000] '>Call Us</h6>
        <p className='text-sm text-[#3a0000] '>081666990000</p>
       </div>
        </div>

       <div className='flex m-4 gap-2 ml-0'>
        <h6 className='font-bold text-[#3a0000] mr-2'>Follow Us</h6>
        <img src={button} alt="THE BUTTON ICON" className='size-7' />
        <img src={twitter} alt="The TWITTER ICON" className='size-7' />
        <img src={Instagram} alt="The Instagram ICON" className='size-7' />
        <img src={button} alt="THE INSTAGRAM ICON" className='size-7' />
       </div>
  
      </div>
      </div>
        
        <div className=' flex flex-col gap-4 relative focus-within:text-[#ff6300]'>
          <FaUser className='absolute ml-4 mt-1' />
          <input type="text" placeholder="Name"
           className='border-gray-600  outline-orange-900 placeholder-gray-500 pr-3 pl-10 border-2 rounded-lg  ' required  />
            </div>

           <input type="email" placeholder='Email Address'
            className='bg-white text-[#ff6300] border-2 border-gray-600 p-2 rounded-lg' required  />
        
 
   
      
    </section>
  )
}

export default contact 