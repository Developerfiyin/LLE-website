import React from 'react'
import Frame from '../assets/Rectangle 22.png'
import location from '../assets/location.png'
import calendar from '../assets/calendar.png'

const event = () => {
  return (
    <div className='flex flex-col p-4 items-center text-center font-Montserrat text-[#999] bg-black py-16 justify-center'>
    <div className='flex flex-col mb-4'>
     <h5 className='text-[#ff6300] font-medium text-2xl'>Event</h5>
     <h2 className='font-bold text-5xl text-[#3a0000]'>Upcoming Event</h2>
   </div>

     <div className='w-150 bg-white flex rounded-lg py-12 pl-2 shadow-green-700'> 
          <img src={Frame} alt="" sizes='40' className='bg-white rounded-md '/>
        <div className='flex flex-col mb-8'>
          <h4 className='text-[#3a0000] font-medium text-3xl ' >ILE-IFE LEADERSHIP SYMPOSUIM</h4>
         <div className='p-2 '>
           <img src={location} alt="" sizes='20' />
          <span className=''>Full address/indication if its virtual </span>
      </div>
      <div>
        <img src={calendar} alt="the calendar image" sizes='25' />
        <span className='pt-8'>12 Nov. 2025</span>
      </div>
      </div>
     

     </div>
    </div>
  )
}   

export default event