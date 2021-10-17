import React from "react";
import {FaPizzaSlice} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";
const MobileNav = () => {
  return (

    <>
    <div className="items-center justify-between flex w-full md:hidden ">

    <div className="w-28 ">
    <img
    src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    alt = "logo"
    className = "w-full h-full"/>
    </div>
    <div className="flex items-center gap-3">
    <button className="bg-zomato-400 text-white py-3 px-2 rounded-full">Use App</button>
    <span className= "border p-2 border-blue-300 text-blue-300 rounded-full">
    <FaPizzaSlice/>
    </span>
    </div>
    </div>
    </>
  )
};
const MediumNav = () => {
  return <>
  <div className= "hidden w-full md:flex items-center justify-around m-0 gap-3 ">

      <div className="w-28">
        <img
          src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt = "logo" className = "w-full h-full"/>
      </div>
      <div className="w-full h-full bg-white shadow px-3 py-4 border border-gray-200 rounded mx-3 flex items-center">

        <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
          <span className="text-zomato-400">

            <HiLocationMarker/>

          </span>
          <input type="text" placeholder="Jalgaon , Raver" className="focus:outline-none" />
          <IoMdArrowDropdown/>
        </div>

        <div className="flex items-center gap-5 m-2 w-full">

        <RiSearch2Line/>
        <input type="search" placeholder="Search for restraurant,cuisine or a dish" className="w-full focus:outline-none" />
        </div>
      </div>
      <div className="flex gap-2 ">
        <button className="text-gray-400 text-xl hover:text-gray-800">Login</button>
        <button className="text-gray-400 text-xl hover:text-gray-800">Signup</button>

      </div>
  </div>


  </>
};


const Navbar = () => {
  return <>

  <nav className= "py-4 px-1 flex items-center bg-white shadow-md lg:shadow-none items-center w-full m-0">
  <MobileNav />
  <MediumNav/>
  </nav>
</>
};
export default Navbar;
