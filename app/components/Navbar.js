
import React from "react"

const Navbar = (props) => {
  return (
    <div className="w-full flex justify-between p-10 text-sm items-center ">
        <div className=" pl-10 text-gray-300 flex gap-10">
        <div>logo</div>
            <ul className=" gap-9 hidden lg:flex ">
                <li className="hover:text-black cursor-pointer">Apps</li>
                <li className="hover:text-black cursor-pointer">Stastics</li>
                <li className="hover:text-black cursor-pointer">Docs</li>
                <li className="hover:text-black cursor-pointer">Developers</li>
            </ul>
        </div>
        <div className=" lg:flex gap-5 pr-10 hidden">
            <input placeholder="Search for apps" className="px-5 py-2 border border-gray-300 rounded-full"/>
            <button className="bg-transparent border border-gray-300 rounded-full px-6 py-2">Login</button>
            <button className="bg-black rounded-full text-white px-6 py-2">Register</button>
        </div>
    </div>
  )
};

export default Navbar;
