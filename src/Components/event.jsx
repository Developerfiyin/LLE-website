import React from 'react'
import Frame from '../assets/Rectangle 22.png'
import location from '../assets/location.png'
import calendar from '../assets/calendar.png'

const event = () => {
  return (
    <div className=' flex-col p-4 items-center grid text-center font-Montserrat text-[#999] bg-[#f9f9f9] py-16 justify-center'>
    <div className='flex flex-col mb-4'>
     <h5 className='text-[#ff6300] font-medium text-2xl bg-[#ffefe6] mx-auto mb-2 p-2 rounded-xl'>Event</h5>
     <h2 className='font-bold text-3xl md:text-4xl sm:text-3xl text-[#3a0000]'>Upcoming Event</h2>
   </div>
                {/* THE DIV FOR THE LOCATION AND CALENDAR */ }
     <div className='w-150 bg-white grid rounded-2xl py-12 pl-2 shadow-2xl' > 
          <img src={Frame} alt="" sizes='50' className='bg-white rounded-md '/>
        <div className='flex flex-col mx-auto '>
          <h4 className='text-[#3a0000] font-medium text-4xl '>ILE-IFE LEADERSHIP SYMPOSUIM</h4>
         <div className='p-2 flex'>
           <img src={location} alt="The location marker" width={20} className='h-6'/>
          <span className='text-xl pl-2'>Full address/indication if its virtual </span>
      </div>
      <div className='flex pl-3'>
        <img src={calendar} alt="the calendar image" width={20} className='h-6'/>
        <span className='pl-6 '>12 Nov. 2025</span>
      </div>
               {/*  THE DIV FOR THE CIRLES*/ }
         <div className=' flex gap-2 m-2 '>
            <div class="w-20 h-20 bg-[#ffe8d9] rounded-full flex flex-col items-center md:w-16 md:h-16 justify-center text-center shadow-lg">
              <h5 class="text-xl font-bold text-[#ff6300]">03</h5>
              <p class="text-sm text-[#3a0000]">Days</p>
           </div>

          <div class="w-20 h-20 bg-[#ffe8d9] md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center text-center shadow-lg">
           <h5 class="text-2xl text-[#ff6300] font-bold">05</h5>
           <p class="text-sm text-[#3a0000]">Hours</p>
          </div>

         <div className='w-20 h-20 rounded-full bg-[#ffe8d9] flex flex-col text-center md:w-16 md:h-16 items-center justify-center'>
           <h5 className='text-[#ff6300] font-bold text-2xl'>25</h5>
           <p className='text-[#3a0000] text-sm'>Minutes</p>
          </div>

         <div class="w-20 h-20 bg-[#ffe8d9] rounded-full flex flex-col items-center justify-center md:w-16 md:h-16 text-center shadow-lg">
          <h5 class="text-2xl text-[#ff6300] font-bold">03</h5>
            <p class="text-sm text-[#3a0000]">Seconds</p>
          </div>
        </div>

        <div className='flex gap-2'>
     <button className='bg-[#a60000] text-white p-2 md:p-2 rounded-lg ease-in-out duration-300 hover:bg-[#3a0000]'>Register Now</button>
     <button className='bg-white text-[#a60000] ml-8 p-2 md:p-1 rounded-lg ease-in duration-200 text-xl font-medium hover:bg-[#ffe8d9] '>Partner with us</button>
   </div>

      </div>
     

     </div>
    </div>
  )
}   

export default event