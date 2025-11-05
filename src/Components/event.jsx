import React from 'react'
import Frame from '../assets/Rectangle 22.png'
import location from '../assets/location.png'
import calendar from '../assets/calendar.png'

const event = () => {
  return (
    <div className=' flex-col p-4 items-center grid  text-center font-Montserrat text-[#999] bg-white py-16 justify-center'>
    <div className='flex flex-col mb-4'>
     <h5 className='text-[#ff6300] font-medium text-2xl bg-[#ffefe6] mx-auto  p-2 rounded-xl'>Event</h5>
     <h2 className='font-bold text-3xl md:text-4xl sm:text-3xl text-[#3a0000]'>Upcoming Event</h2>
   </div>

     <div className='w-150 bg-white grid  rounded-2xl py-12 pl-2 shadow-2xl md:grid-cols-2'> 
          <img src={Frame} alt="" sizes='40' className='bg-white rounded-md '/>
        <div className='flex flex-col mb-9 '>
          <h4 className='text-[#3a0000] font-medium text-4xl '>ILE-IFE LEADERSHIP SYMPOSUIM</h4>
         <div className='p-2 flex'>
           <img src={location} alt="The location marker" width={25} className='h-6'/>
          <span className='text-xl pl-2'>Full address/indication if its virtual </span>
      </div>
      <div className='flex p-2'>
        <img src={calendar} alt="the calendar image" sizes='25'/>
        <span className='pl-6 '>12 Nov. 2025</span>
      </div>
/*njfnwjnefqjigjwefi
           <div className=' flex  gap-6'>

 <div className='rounded-full bg-[#ffefe6] p-8 '>
        <h5 className='text-[#ff6300] font-semibold '>05</h5>
        <p className='text-[#3a000]'>Days</p>
        </div>
       
     
             <div className='rounded-full bg-[#ffefe6] p-8 '>
        <h5 className='text-[#ff6300] font-semibold '>05</h5>
        <p className='text-[#3a000]'>Days</p>
        </div>
           </div>
     

      </div>
     

     </div>
    </div>
  )
}   

export default event