import React from 'react'
import Card from './Card'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[url('/public/assets/header_img.png')] bg-center bg-cover bg-no-repeat flex flex-col w-full pb-[20vh]">
        <div className="lg:pt-[15vh] pt-[10vh] lg:w-[80vw] w-[90vw] mx-auto flex flex-col text-[#fff] lg:text-[56px] text-[40px] font-semibold -space-y-4">
          <div>
            <span> Financial </span>
            <span className="text-[#00FF79]">Solutions</span>
          </div>
          <span>to Advance Your</span>
          <span>Business</span>
        </div>
        <div className="lg:pl-[10vw] lg:w-[60vw] w-[90vw] mx-auto lg:mx-0 flex flex-col space-y-8 text-white lg:text-[20px] text-[16px]">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum! Iusto ducimus nulla neque. Quos error voluptatibus labore cum. Consequatur nesciunt nisi vel. Nemo neque dolorem aliquid iste hic saepe aspernatur!</span>
          <button className="bg-[#036632] lg:max-w-[20vw] max-w-[40vw] lg:text-[20px] text-[16px] p-6 uppercase">Get a Quote</button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-4 w-[80vw] relative -top-10 mx-auto">
        <Card 
        header="Professional Advice"
        img="vector_one.png"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum! Iusto ducimus nulla neque. Quos error voluptatibus labore cum."
        />
        <Card
        header="Transparent"
        img="vector_five.png"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum! Iusto ducimus nulla neque. Quos error voluptatibus labore cum."
        />
        <Card
        header="Great Support"
        img="vector_three.png"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum! Iusto ducimus nulla neque. Quos error voluptatibus labore cum."
        />
        <Card
        header="Fully Independent"
        img="vector_four.png"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum! Iusto ducimus nulla neque. Quos error voluptatibus labore cum."
        />
      </div>
    </div>
  )
}

export default Header
