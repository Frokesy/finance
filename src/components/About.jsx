const About = () => {
    return (
        <div className="lg:w-[80vw] w-[90vw] flex lg:flex-row flex-col lg:justify-between mx-auto mt-[10vh]">
                <div className="lg:w-[45%]">
                    <h1 className="text-[#036632] lg:text-[40px] text-[34px] font-semibold">About Us</h1>
                    <p className="lg:text-[32px] text-[22px] font-semibold my-4">The Easiest Way to Manage Personal Finances</p>
                    <span className="lg:text-[14px] text-[12px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum! Iusto ducimus nulla neque. Quos error voluptatibus labore cum. Consequatur nesciunt nisi vel. Nemo neque dolorem aliquid iste hic saepe aspernatur!</span>
                    <div className="flex space-x-4 mt-4">
                        <div className="flex items-center space-x-2">
                            <img src="/assets/vectors/vector_five.png" alt="vector_five" className="lg:w-[3rem] w-[2rem]" />
                            <div className="flex flex-col -space-y-1">
                            <span className="lg:text-[20px] text-[16px] font-semibold">20</span>
                            <p className="lg:text-[13px] text-[10px]">Years of experience</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-end w-[50%] space-x-2">
                            <img src="/assets/vectors/vector_six.png" alt="vector_six" className="lg:w-[3rem] w-[2rem]" />
                            <div className="flex flex-col -space-y-1">
                            <span className="lg:text-[20px] text-[16px] font-semibold">45</span>
                            <p className="lg:text-[13px] text-[10px]">Team members</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative lg:w-[55%] lg:flex hidden lg:justify-end h-[50vh]">
                <div className="w-[70%] h-[80%] bg-[#036632] absolute right-30 top-[12vh] rounded-br-3xl"></div>
                <img src="/assets/body_img_one.png" alt="body_img_one" className="w-[70%] h-[95%] right-20 relative top-0" />
                </div>
        </div>
    )
}

export default About