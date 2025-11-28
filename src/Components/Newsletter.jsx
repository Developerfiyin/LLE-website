import React from 'react'

const Newsletter = () => {
  return (
    
    <main className='py-8  p-4 bg-white items-center '>
    
           <div className='flex flex-col mx-auto'> 
        <p className='bg-[#ffe8d9] text-[#ff6300] text-xl mx-auto rounded-lg  p-2 mb-3'>Our News Letter</p>
       <h3 className='font-medium text-5xl text-[#3a0000] mx-auto mb-5 '>Get the latest updates <br />
         delivered to your mail</h3>
  
          <div className='flex'>
           <input type="text" placeholder='Enter your email address'
            className='pl-10 pr-3 py-2 w-90 ml-90 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ff6300] focus:outline-none' />

          </div>


           </div>


     
      </main>
      
    


   
  )
}
  {/*<div className=' flex md:grid justify-around flex-col'>
   
       <p className='bg-[#ffe8d9] text-[#ff6300] text-xl mx-auto rounded-lg  p-2 mb-3'>Our News Letter</p>
        <h3 className='font-medium text-5xl text-[#3a0000] mx-auto mb-5 '>Get the latest updates <br />
         delivered to your mail</h3>
         <div className='flex gap-3 mx-auto'> 
         <input type="text" placeholder='Enter your email address'
        className='pl-10 pr-3 py-2 w-90 ml-90 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ff6300] focus:outline-none' />
        <button className='bg-[#a60000] text-white ml-0 mx-auto p-2 md:p-2 w-50 rounded-lg ease-in-out duration-300 hover:bg-[#3a0000]'>Register Now</button>
        </div>
        
    </div>*/}
export default Newsletter
