import React from 'react'
import call from '../assets/call-02.png'
import button from '../assets/Button.png'
import twitter from '../assets/twitter.png'
import Instagram  from '../assets/instagram.png'

const Footer = () => {
  return (
    <div className='py-12  bg-[#F8F7F7] p-8 '>
    <div className='flex flex-col m-9 gap-3'>  
     <p className='text-[#999] text-xl mb-8'>Limitless Leadership Eversion (LLE) is  a non-profit organization <br />
        dedicated to developing young adults into  capable, effective, and <br />
         efficient  leaders across all social systems. We recognize that <br />
      leadership is the  most vital role in every society. Hence, LLE is <br />
     founded on an incurable drive to strengthen and uphold the   <br />
     pillar of  leadership, ensuring progress and  prosperity at every level.</p>
         
         <div className='flex gap-6 '>
      <img src={button} alt="" className='w-8 h-8' />
     <img src={twitter} alt="THE TWITTER ICON" className='w-8 h-8' />
     <img src={Instagram} alt="THE INSTAGRAM ICON"className='w-8 h-8' />
     <img src={button} alt="THE LINKDEIN ICON" className='w-8 h-8' />
         </div>
    
    </div>

    </div>
  )
}

export default Footer