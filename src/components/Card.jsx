import React from 'react'

const Card = ({ header, img, content }) => {
  return (
    <div>
      <div className="shadow-xl bg-[#fff] lg:px-6 px-4 lg:py-[8vh] py-10 border-b-[2vh] border-b-[#00FF79] border-b-2px">
          <img src={`/assets/vectors/${img}`} alt="vector_one" className="w-[2.5rem] " />
          <h2 className="font-bold py-[2vh] text-[14px]">{header}</h2>
          <p className="text-[11px] lg:text-[13px]">{content}</p>
        </div>
    </div>
  )
}

export default Card
