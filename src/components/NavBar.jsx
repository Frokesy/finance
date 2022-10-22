import React from 'react'
import { FaFacebook, FaGlobe, FaInstagram, FaTwitter } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="lg:w-[80vw] w-[90vw] mx-auto flex my-3 justify-between">
      <div className="flex space-x-1 items-center">
        <img src="/assets/vectors/logo.png" alt="logo" className="lg:w-[3rem] w-[2rem]" />
        <span className="text-[#036632] lg:text-[24px] text-[20px] font-semibold uppercase">Finance!</span>
      </div>
      <div className="lg:flex hidden font-normal space-x-8 text-[#036632] text-[16px] items-center">
        <span>Home</span>
        <span>About Us</span>
        <span>Pages</span>
        <span>Services</span>
        <span>Contact Us</span>
      </div>
      <div className="flex space-x-6 text-[#036632] lg:text-[18px] text-[14px] items-center">
        <FaFacebook />
        <FaTwitter  />
        <FaInstagram />
        <FaGlobe />
      </div>
    </div>
  )
}

export default NavBar
