import React from 'react'

const ServiceCard = ({ header, img, content }) => {
  return (
    <div>
      <div className="shadow-xl bg-[#fff] lg:p-10 p-6 flex lg:flex-row flex-col">
          <img src={`/assets/vectors/${img}`} alt="vector_one" className="w-[2rem] h-[2rem]" />
            <div className="flex flex-col lg:ml-4">
                <h2 className="font-bold lg:text-[14px] text-[12px] lg:mt-0 mt-4 text-[#036632]">{header}</h2>
                <p className="lg:text-[10px] text-[9px] my-3">{content}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard