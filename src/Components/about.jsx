import React from 'react'
import Frame26 from '../assets/Frame 26.png'
const about = () => {
  return (
    <section className='bg-white py-16 p-4'>

          <div className='flex justify-evenly '>
          <div className='m-'>
         <img src={Frame26} alt="the picture template" />
      </div>

        <div className='flex flex-col'>
       <p className='bg-[#ffe8d9] text-[#ff6300] rounded-md mx-auto p-2 ml-0'>How we work</p>
           <h2 className='text-[#3a0000] font-semibold text-4xl '>Raising Leaders, One At A Time. </h2>


      </div>
          </div>
    
      


      
    </section>
  )
}

export default about