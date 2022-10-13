import React from 'react'
import { FaFacebook, FaGlobe, FaInstagram, FaTwitter } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="w-[80vw] mx-auto flex my-3 justify-between">
      <div className="flex space-x-1 items-center">
        <img src="/assets/vectors/logo.png" alt="logo" className="w-[3rem]" />
        <span className="text-[#036632] text-[24px] font-semibold uppercase">Finance!</span>
      </div>
      <div className="flex font-normal space-x-8 text-[#036632] text-[16px] items-center">
        <span>Home</span>
        <span>About Us</span>
        <span>Pages</span>
        <span>Services</span>
        <span>Contact Us</span>
      </div>
      <div className="flex space-x-6 text-[#036632] text-[18px] items-center">
        <FaFacebook />
        <FaTwitter  />
        <FaInstagram />
        <FaGlobe />
      </div>
    </div>
  )
}

export default NavBar
