import React from 'react'

const Newsletter = () => {
  return (
    <div className='py-12 p-4 bg-white flex flex-col item-center '>
       <p className='bg-[#ffe8d9] text-[#ff6300] text-xl rounded-lg mx-auto p-2 mb-3'>Our News Letter</p>

        <h3 className='font-medium text-5xl text-[#3a0000] mx-auto mb-5 '>Get the latest updates <br />
         delivered to your mail</h3>
                     
                     <div className='flex gap-3'> 
                            <input type="text" placeholder='Enter your email address'
                            className='pl-10 pr-3 py-2 w-100 mx-auto border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ff6300] focus:outline-none' />
                     </div>
                   



    </div>
  )
}

export default Newsletter
