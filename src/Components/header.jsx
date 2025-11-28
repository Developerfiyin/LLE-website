import React, {useState} from 'react'
import Logo from "../assets/LLE logo 1.png";
import {AiOutlineClose } from 'react-icons/ai';
import Frame from "../assets/Frame 14.png"; 

const Header = () => {
 
  const [nav, SetNav] = useState(false)

    const handleClick = () => {
          SetNav(!nav )
    }

  return (
    <>
    <header className='bg-amber-50 flex justify-between text-[#9999] py-10 p-4 mx-auto text-center'>
       <img src={Logo} alt="The logo image" width={100} />
       <div className='hidden md:flex gap-8 font-medium'>
       <a href="#hero" className='text-[#A60000] hover:text-[#fd0707]'>Home</a>
       <a href="#about" className='hover:text-[#fd0707]'>About us</a>
       <a href="#event" className='hover:text-[#fd0707]'>Events</a>
       <a href="#contact" className='hover:text-[#fd0707] '>Contact us </a>
       </div>
      
    <button className="bg-black w-[125px] rounded-md text-white shadow-[#A60000] hover:bg-[#4C0101] ease-out duration-300 ">Donate</button>
 
          <div className={nav ? "gap-8 flex flex-col space-y-4 fixed w-[50%] border-b border-b-grey-900 h-full border-r top-0 left-0 bg-white text-center text-2xl ease-in-out duration-300" : 'fixed -left-full ease-in-out duration-300 ' }>
          <a href="#hero" className="p-4 text-[#A60000] hover:text-[#fd0707]">Home</a>
          <a href="#about" className="p-4 hover:text-[#fd0707] ">About us</a>
          <a href="#event" className="p-4 hover:text-[#fd0707] ">Events</a>
          <a href="#contact" className="p-4 hover:text-[#fd0707]">Contact us</a>
        </div>

         <div onClick={handleClick} className="block md:hidden">
             {nav ? <img src={Frame} sizes="57" alt="the frame from the webpage" /> : <AiOutlineClose size={25}/> }
         </div>
    </header>

    
    </>
  )
}

export default Header