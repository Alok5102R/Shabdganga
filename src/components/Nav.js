import React from 'react';
import { HiOutlineBookOpen } from "react-icons/hi";
import user from '../images/user.png'


function Nav() {
  return (
    <div>
         <nav className="bg-gray-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            {/* Logo */}
            <a href="#" className="text-white font-bold text-6xl mr-4"><HiOutlineBookOpen /></a>
            {/* Navbar links */}
           
        </div>
        <div className="flex items-center gap-8">
        <img src={user} alt="User" className="w-10 h-10 rounded-full" />
            <button className="text-white hover:text-gray-300 mr-4">Sign In</button>
            <button className="text-white hover:text-gray-300 mr-4">Sign Up</button>
            <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-gray-300">FAQ</a></li>
            </ul>
           
        </div>
    </div>
</nav>

    </div>
  )
}

export default Nav