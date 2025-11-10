import React from 'react'
import email from '../assets/email.png'
import call from '../assets/call-02.png'
import button from '../assets/Button.png'
import twitter from '../assets/twitter.png'
import Instagram  from '../assets/instagram.png'

const contact = () => {
  return (
    <section className='bg-[#F8F7F7] py-12 flex flex-col m-9'>
      <div className='flex flex-col p-6 '>
       <p className='bg-[#ffe8d9] text-[#ff6300] rounded-md mx-auto p-2 text-lg mb-3 ml-0'>Testimonals</p>
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
       
       <div>
        <h6 className='font-bold text-[#3a0000] '>Follow Us</h6>
        <img src={button} alt="THE BUTTON IMAGE" />
        <img src={twitter} alt="" />
        <img src="" alt="" />
       </div>
       
        </div>
      </div>
      
    </section>
  )
}

export default contact