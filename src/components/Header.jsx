import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[url('/public/assets/header_img.png')] bg-center bg-cover bg-no-repeat w-full h-[90vh]">
        hello
      </div>
    </div>
  )
}

export default Header
