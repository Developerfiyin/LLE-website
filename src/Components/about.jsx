import React from 'react'
import Frame26 from '../assets/Frame 26.png'
const about = () => {
  return (
    <section className='bg-white py-16 p-4'>

        <div className='flex justify-between '>
          <div className='mx-10'>
         <img src={Frame26} alt="the picture template" />
      </div>

      <div className='flex flex-col mx-12 gap-2 '>
       <p className='bg-[#ffe8d9] text-[#ff6300] rounded-md mx-auto  p-2 ml-0'>How we work</p>
           <h2 className='text-[#3a0000] font-semibold text-4xl mb-6 '>Raising Leaders, One At A Time. </h2>
         <p className='text-[#3a0000] border-l-4 font-medium pl-4 h-17 border-l-[#ff6400]'>Limitless Leadership Eversion (LLE) is  a non-profit organization  <br /> 
         dedicated  to developing young adults into capable, effective, and <br />
          efficient  leaders across all social systems.</p>

      </div>
          </div>
    
      


      
    </section>
  )
}

export default about