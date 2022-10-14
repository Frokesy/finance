import React from 'react'

const ServiceCard = ({ header, img, content }) => {
  return (
    <div>
      <div className="shadow-xl bg-[#fff] p-10 flex">
          <img src={`/assets/vectors/${img}`} alt="vector_one" className="w-[2rem] h-[2rem]" />
            <div className="flex flex-col ml-4">
                <h2 className="font-bold text-[14px] text-[#036632]">{header}</h2>
                <p className="text-[10px] my-3">{content}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard