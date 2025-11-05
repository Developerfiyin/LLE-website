import React from 'react'
import Frame from '../assets/Rectangle 22.png'


const event = () => {
  return (
    <div className='flex flex-col p-4 items-center text-center font-Montserrat text-[#999] bg-black py-16 justify-center'>
    <div className='flex flex-col mb-4'>
     <h5 className='text-[#ff6300] font-medium text-2xl'>Event</h5>
     <h2 className='font-bold text-5xl text-[#3a0000]'>Upcoming Event</h2>
   </div>

     <div className='w-150 bg-white flex rounded-lg py-12 p-2 shadow-green-700'> 
          <img src={Frame} alt="" sizes='40' className='bg-white rounded-md p-19'/>
      <h4 className='text-[#3a0000] font-medium text-3xl '>ILE-IFE LEADERSHIP SYMPOSUIM</h4>
      <img src="" alt="" />
      <span></span>

     </div>
    </div>
  )
}   

export default event