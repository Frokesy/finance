import React from 'react'

const Extra = () => {
    return (
        <div className="lg:w-[80vw] w-[90vw] flex lg:flex-row flex-col lg:justify-between mx-auto mt-[10vh]">
                <div className="relative lg:w-[50%] lg:h-[65vh] h-[50vh]">
                    <img src="/assets/body_img_two.png" alt="body_img_one" className="h-[90%] lg:w-[70%] w-[90%] absolute left-[3rem] top-[2.5vh]" />
                    <div className="lg:w-[60%] w-[85%] h-[85%] bg-[#036632] rounded-tl-3xl "></div>
                </div>
                <div className="lg:w-[50%]">
                    <h1 className="text-[#036632] lg:text-[40px] text-[34px] font-semibold">Who we are?</h1>
                    <p className="lg:text-[32px] text-[24px] font-semibold my-4">Get Expert Advise and Start Saving</p>
                    <span className="lg:text-[14px] text-[12px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum! Iusto ducimus nulla neque. Quos error voluptatibus labore cum. Consequatur nesciunt nisi vel. Nemo neque dolorem aliquid iste hic saepe aspernatur!</span>

                    <div className="flex flex-col">
                        <div className="flex flex-col mt-10 space-y-2">
                            <div className="flex justify-between w-[75%] font-bold lg:text-[14px] text-[12px]">
                                <h2>Investment planning</h2>
                                <span>75%</span>
                            </div>
                            <div className="w-full bg-gray-300">
                                <div className="w-[75%] p-2 bg-[#036632]"></div>
                            </div>
                        </div>

                        <div className="flex flex-col mt-10 space-y-2">
                            <div className="flex justify-between w-[85%] font-bold lg:text-[14px] text-[12px]">
                                <h2>Audit & Assurance</h2>
                                <span>85%</span>
                            </div>
                            <div className="w-full bg-gray-300">
                                <div className="w-[85%] p-2 bg-[#036632]"></div>
                            </div>
                        </div>

                        <div className="flex flex-col mt-10 space-y-2">
                            <div className="flex justify-between w-[80%] font-bold lg:text-[14px] text-[12px]">
                                <h2>Business Traction</h2>
                                <span>80%</span>
                            </div>
                            <div className="w-full bg-gray-300">
                                <div className="w-[80%] p-2 bg-[#036632]"></div>
                            </div>
                        </div>

                        <div className="flex flex-col mt-10 space-y-2">
                            <div className="flex justify-between w-[80%] font-bold text-[14px]">
                                <h2>Account Outsourcing</h2>
                                <span>80%</span>
                            </div>
                            <div className="w-full bg-gray-300">
                                <div className="w-[80%] p-2 bg-[#036632]"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Extra
