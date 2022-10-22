import React from 'react'
import { FaFacebook, FaGlobe, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full bg-[#036632] mt-[10vh]">
      <div className="w-[80vw] mx-auto flex justify-between py-[5vh]">
        <div className="w-[30%] flex flex-col">
            <div className="flex space-x-1 items-center">
                <img src="/assets/vectors/logo-white.png" alt="logo" className="w-[2rem]" />
                <span className="text-[#fff] text-[18px] font-semibold uppercase">Finance!</span>
            </div>
            <p className="text-[#fff] text-[12px] font-normal mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="flex flex-col space-y-16 w-[40%]">
            <div className="flex space-x-4 mt-4 items-center text-[#fff] text-[14px] font-semibold justify-between">
                <span>Home</span>
                <span>About Us</span>
                <span>Pages</span>
                <span>Services</span>
                <span>Contact Us</span>
            </div>

            <div className="flex space-x-6 text-[#fff] text-[18px] justify-end">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaGlobe />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
