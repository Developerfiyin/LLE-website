import React from 'react'
import email from '../assets/email.png'
import call from '../assets/call-02.png'
import button from '../assets/Button.png'
import twitter from '../assets/twitter.png'
import Instagram  from '../assets/instagram.png'

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
        
        <div className='bg'>
          <input type="text" placeholder="Name"
           className='border-gray-600 bg-white outline-orange-900 text-[#ff6300] border-2 p-2 rounded-2xl ' required  />
           <input type="email" placeholder='Email Address' className='bg-white text-[#ff6300]' required  />
           <input type="number" placeholder='Phone Number' className='bg-white text-[#ff6300]' required  />
        </div>

   
      
    </section>
  )
}

export default contact