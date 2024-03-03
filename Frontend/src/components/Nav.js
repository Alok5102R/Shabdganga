import React from 'react';
import { HiOutlineBookOpen } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import user from '../images/user.png'

import { useNavigate } from 'react-router-dom';




function Nav({setIsModalOpen,username}) {
    const navigate = useNavigate();
  return (
    <div>
         <nav className="bg-gray-900 p-4 font-serif">
                <div className=" nav-lg  mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        {/* Logo */}
                        <a href="" className="text-white font-bold text-6xl mr-4" onClick={()=>navigate("/")}><HiOutlineBookOpen /></a>
                        {/* Navbar links */}
                    
                    </div>
                    <div className="flex items-center gap-8">
                        <img src={user} alt="User" className="w-10 h-10 rounded-full" onClick={()=>navigate("/UserProfile")}/>
                          
                        <button className="text-white hover:text-gray-300 mr-4" onClick={() => navigate("/UserProfile")}>{username}</button>

                        <button className="text-white hover:text-gray-300 mr-4" onClick={() => navigate("/")}>Home</button>
                        <button className="text-white hover:text-gray-300 mr-4" onClick={()=>setIsModalOpen(true)}>Sign In</button>
                        <button className="text-white hover:text-gray-300 mr-4"  onClick={() => navigate("/SignUp")}>Sign Up</button>
                        <button className="text-white hover:text-gray-300 mr-4"  onClick={() => navigate("/FAQ")}>FAQ</button>
                        
                    
                    </div>
                </div>


                {/* for mobile */}
                <div className='menu lg:hidden flex justify-between'>
                <a href="#" className="text-white text-6xl"><HiOutlineBookOpen /></a>
                <icon className='text-white text-6xl'><RxHamburgerMenu /></icon>
                </div>

        </nav>

    </div>
  )
}

export default Nav