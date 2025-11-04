import React, { useState } from "react";
import Logo from "../assets/LLE logo 1.png"; //used
import {AiOutlineClose } from 'react-icons/ai'; //used
import Frame from "../assets/Frame 14.png"; //used
const Navbar = () => { 
    const [nav, SetNav] = useState(false)

    const handleClick = () => {
          SetNav(!nav )
    }  //used
  return (
    <div className="w-full text-center ">
      <div className="bg-amber-600 flex justify-between text-[#9999] font-medium p-4 gap-7">
        <img src={Logo} alt="The logo image" width={99} />
        <ul className="text-center text-2xl hidden">
          <li className="p-4 text-[#A60000] hover:text-[#fd0707]">Home</li>
          <li className="p-4 hover:text-[#fd0707]">About us</li>
          <li className="p-4 hover:text-[#fd0707]">Events</li>
          <li className="p-4 hover:text-[#fd0707]">Contact us</li>
        </ul>
        <button className="bg-black w-[125px] rounded-md text-white m-2 shadow-[#A60000] hover:bg-[#4C0101] ease-out duration-300 ">Donate</button>
 
         <div className={nav ? "flex-col fixed w-[50%] h-full border-r top-0 left-0 bg-[#999] text-center text-2xl ease-in-out duration-300" : 'fixed -left-full ease-in-out duration-300 ' }>
          <a href="#"  className="p-4 text-[#A60000] hover:text-[#fd0707]">Home</a>
          <a href="#about" className="p-4 hover:text-[#fd0707] ">About us</a>
          <a href="#events" className="p-4 hover:text-[#fd0707] ">Events</a>
          <a href="#contact us" className="p-4 hover:text-[#fd0707]">Contact us</a>
        </div>
        <div onClick={handleClick} className="block md:hidden">
            {nav ? <img src={Frame} sizes="57" alt="the frame from the webpage" /> : <AiOutlineClose size={25}/> }
        </div>
        


      </div>
    </div>
  );
};

export default Navbar;


