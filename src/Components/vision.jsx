import React from 'react'
import Frame43 from '../assets/Frame 43.png'
import linksquare from '../assets/link square.png'

const vision = () => {
  return (
    <div className='py-12 bg-[#f9f9f9] p-4 flex flex-col'>
        
          <div className='flex flex-col justify-evenly items-center '>
              <p className='bg-[#ffe8d9] text-[#ff6300] rounded-md p-2 mb-2'>How we work</p>
              <h2 className='text-3xl font-medium text-[#3a0000] mb-6'>Building Leaders for the future.</h2>

                       
                       <div className='grid md:grid-cols-3 ml-10 rounded-lg'>
                         <div className='p-14' >
                          <div className='bg-[#f2f2f7] flex flex-col items-center gap-7 p-5 text-center'>
                           <img src={Frame43} alt="THE FRAME FOR THE VISION (ORANGE)" width={50}  />
                         <div className='m-2'>
                         <h5 className='text-[#0a0900] font-semibold text-4xl'>Who are you ?</h5>
                         <h5 className='text-[#999] m-2 text-xl'>We are a non-profit making organisation dedicated to developing young <br /> adults into capable leaders. </h5>
                          </div>
                        <div className='flex justify-between  gap-3'>
                          <button>Read More</button>         
                        <img src={linksquare} alt="THE LINK SQUARE IMAGE" className='size-4' />
                        </div>
                         </div> 
                          </div>
                        

                              <div className='p-14'>
                         <div className='bg-[#f2f2f7] flex flex-col p-5 gap-7 items-center text-center' >
                         <img src={Frame43} alt="THE FRAME FOR THE VISION (ORANGE)" width={50}  />
                         <div className='m-2'>
                         <h5 className='text-[#0a0900] font-semibold text-4xl'>Our Methods</h5>
                         <h5 className='text-[#999] m-2 text-xl'>We are a non-profit making organisation dedicated to developing young <br /> adults into capable leaders. </h5>
                          </div>
                        <div className='flex justify-between  gap-3'>
                          <button>Read More</button>         
                        <img src={linksquare} alt="THE LINK SQUARE IMAGE" className='size-4' />
                        </div>
                         </div> 
                           </div>

                            <div className='p-14'>
                         <div className='bg-[#f2f2f7] flex flex-col p-5 gap-7 items-center text-center' >
                         <img src={Frame43} alt="THE FRAME FOR THE VISION (ORANGE)" width={50}  />
                         <div className='m-2'>
                         <h5 className='text-[#0a0900] font-semibold text-4xl'>Our Method</h5>
                         <h5 className='text-[#999] m-2 text-xl'>We are a non-profit making organisation dedicated to developing young <br /> adults into capable leaders. </h5>
                          </div>
                        <div className='flex justify-between  gap-3'>
                          <button>Read More</button>         
                        <img src={linksquare} alt="THE LINK SQUARE IMAGE" className='size-4' />
                        </div>
                         </div> 
                       </div>
                       </div>
          </div>
        
        </div>
  )
}

export default vision