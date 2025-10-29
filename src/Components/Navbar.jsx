import React from 'react'
import Logo from '../assets/LLE logo 1.png'
const Navbar = () => {
  return (
  

     <div className='bg-white max-w-[1240px] flex justify-between mx-auto p-4' >

        <div className='text-2xl text-[#999999]'>

    <img src={Logo} alt="The logo image" width={99}/>
   <ul className='lists'>
    <li className=''>Home</li>
    <li>About us</li>
    <li>Events</li>
    <li>Contact us</li>
    </ul>
  <button>Donate</button>

        </div>
   
   </div>







  )
}

export default Navbar