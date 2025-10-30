import React from "react";
import Logo from "../assets/LLE logo 1.png";
const Navbar = () => {
  return (
    <div className="w-full text-center ">
      <div className="bg-blue-50 flex justify-between text-[#9999] font-medium p-4 gap-7 ">
        <img src={Logo} alt="The logo image" width={99} />
        <ul className="flex text-center text-2xl">
          <li className="p-4 text-[#A60000] hover:text-[#fd0707]">Home</li>
          <li className="p-4 hover:text-[#fd0707] " >About us</li>
          <li className="p-4 hover:text-[#fd0707] " >Events</li>
          <li className="p-4 hover:text-[#fd0707]" >Contact us</li>
        </ul>
        <button className="bg-black w-[125px] rounded-md text-white m-2 shadow-[#A60000] hover:bg-[#4C0101] ease-out duration-300 ">Donate</button>
      </div>
    </div>
  );
};

export default Navbar;
