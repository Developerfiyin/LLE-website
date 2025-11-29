import React from 'react'
import email from '../assets/email.png'
import call from '../assets/call-02.png'
import button from '../assets/Button.png'
import twitter from '../assets/twitter.png'
import Instagram  from '../assets/instagram.png'
import { FaUser } from "react-icons/fa";
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const contact = () => {
  return (
    <section className='py-12 px-4 bg-[#f8f7f7]'>

      <div className='flex flex-col mx-auto'>
             
             <div className='flex justify-between'>
              <div> 
              <p className='bg-[#ffe8d9] text-[#ff6300] text-2xl rounded-lg mx-auto p-2 mb-3 ml-0'>Contact Us</p>
              <h2 className='text-[#3a0000] text-3xl font-medium  mb-9'>Feel Free To Contact Us Anytime.</h2>

                 <div className='flex gap-3'>
       <img src={email} alt="The email icon" className='size-12' />
       <div className=''>
        <h6 className='font-medium text-[#3a0000] text-xl '>Chat Now</h6>
        <p className='text-sm text-[#3a0000] '>Kinkan@gmail.com</p>
       </div>

       <img src={call} alt="The email icon" className='size-9' />
       <div className=''>
        <h6 className='font-medium text-[#3a0000] text-xl'>Call Us</h6>
        <p className='text-sm text-[#3a0000] '>081666990000</p>
       </div>
        </div>

   <div className='flex m-4 gap-2 ml-0'>
        <h6 className='font-bold text-[#3a0000] mr-2 text-2xl'>Follow Us</h6>
        <img src={button} alt="THE BUTTON ICON" className='size-7' />
        <img src={twitter} alt="The TWITTER ICON" className='size-7' />
        <img src={Instagram} alt="The Instagram ICON" className='size-7' />
        <img src={button} alt="THE INSTAGRAM ICON" className='size-7' />
       </div>           

                
             </div>

          <div className=" flex gap-2.5">
            <div className="relative w-64">
                <FaUser className="absolute left-3 top-2.5 text-gray-500" size={20} />
                  <input
                  type="text"  
                   required
               placeholder="Name..."
              className="pl-10 pr-3 py-2 w-full border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ff6300] focus:outline-none"/>
                  </div> 

            <div>
            <select
           className="border border-gray-300 mb-5 rounded-lg p-2 w-60 focus:outline-none focus:ring-2 focus:ring-[#ff6300]">
           <option value="Subject">Choose Subject</option>
          <option value="Subject">Choose Subject</option>
          <option value="Subject">Choose Subject</option>
          <option value="Subject">Choose Subject</option>
          <option value="subject">Choose Subject</option>
          <option value="subject">Choose Subject</option>
          <option value="subject">Choose Subject</option>
         </select>
      </div>  

       
      </div>
      
       </div>            
             
      </div>
   
      
    </section>
  )
}

export default contact 

 {/*<div className=' bg-[#F8F7F7] flex flex-col m-9 '>

      <div className='flex flex-col p-6 '>
       <p className='bg-[#ffe8d9] text-[#ff6300] text-2xl rounded-lg mx-auto p-2 mb-3 ml-0'>Contact Us</p>
        <h2 className='text-[#3a0000] text-3xl font-medium  mb-9'>Feel Free To Contact Us Anytime.</h2>

        <div className='flex gap-3'>
       <img src={email} alt="The email icon" className='size-12' />
       <div className=''>
        <h6 className='font-medium text-[#3a0000] text-xl '>Chat Now</h6>
        <p className='text-sm text-[#3a0000] '>Kinkan@gmail.com</p>
       </div>

       <img src={call} alt="The email icon" className='size-9' />
       <div className=''>
        <h6 className='font-medium text-[#3a0000] text-xl'>Call Us</h6>
        <p className='text-sm text-[#3a0000] '>081666990000</p>
       </div>
        </div>

       <div className='flex m-4 gap-2 ml-0'>
        <h6 className='font-bold text-[#3a0000] mr-2 text-2xl'>Follow Us</h6>
        <img src={button} alt="THE BUTTON ICON" className='size-7' />
        <img src={twitter} alt="The TWITTER ICON" className='size-7' />
        <img src={Instagram} alt="The Instagram ICON" className='size-7' />
        <img src={button} alt="THE INSTAGRAM ICON" className='size-7' />
       </div>
  
      </div>
      </div>
        
       <div className='flex flex-col'>
        <div className='flex gap-4'> 
            <div className="relative w-64">
               {/* Icon }
                <FaUser className="absolute left-3 top-2.5 text-gray-500" size={20} />

               {/* Input }
                  <input
                  type="text"   required
               placeholder="Name..."
              className="pl-10 pr-3 py-2 w-full border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ff6300] focus:outline-none"/>
                  </div> 

                {/* OPTION TAG }
                  
         <div className="p-4">
          <select
        className="border border-gray-300 mb-5 rounded-lg p-2 w-60 focus:outline-none focus:ring-2 focus:ring-[#ff6300]">
        <option value="Subject">Choose Subject</option>
        <option value="Subject">Choose Subject</option>
        <option value="Subject">Choose Subject</option>
        <option value="Subject">Choose Subject</option>
        <option value="subject">Choose Subject</option>
        <option value="subject">Choose Subject</option>
        <option value="subject">Choose Subject</option>
        </select>
      </div>
        </div>

      {/* FLEX 2}


       <div className='flex gap-4'>
      <div className="relative w-64">
              {/* Icon */}
              <MdEmail className="absolute left-3 top-2.5 text-gray-500" size={20} />

              {/* Input }
              <input
                  type="email"   required
               placeholder="Email Address..."
              className="pl-10 pr-3 py-2 w-full border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ff6300] focus:outline-none"/>
       </div>

  <div className="relative w-64">
      {/* Icon }
      <BsTelephoneFill  className="absolute left-3 top-2.5 text-gray-500" size={20} />

      {/* Input }
      <input
        type="phone no"
        placeholder="Phone number"
        className="pl-10 pr-3 py-2 w-full border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ff6300] focus:outline-none"
      />
    </div>
      </div> 

    <textarea
      placeholder="Write your thoughts..."
      className="w-full h-40 mx-auto mt-3 border border-gray-300 rounded-lg p-3 text-gray-700 resize-none focus:ring-2 focus:ring-[#ff6300] focus:outline-none"
      />

      <button className='bg-[#a60000] mx-auto mt-6 ml-0 text-white p-2 md:p-2 rounded-lg ease-in-out duration-300 hover:bg-[#3a0000]'>Send Your Message</button>

       </div>
  */}