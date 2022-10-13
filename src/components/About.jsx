const About = () => {
    return (
        <div className="w-[80vw] flex justify-between space-x-[10vw] mx-auto mt-[10vh]">
                <div className="w-[45%]">
                    <h1 className="text-[#036632] text-[40px] font-semibold">About Us</h1>
                    <p className="text-[32px] font-semibold my-4">The Easiest Way to Manage Personal Finances</p>
                    <span className="text-[14px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum! Iusto ducimus nulla neque. Quos error voluptatibus labore cum. Consequatur nesciunt nisi vel. Nemo neque dolorem aliquid iste hic saepe aspernatur!</span>
                </div>
                <div className="relative w-[55%]">
                <div className="w-[30vw] h-[28vh] bg-[#036632] absolute right-20 top-[12vh] rounded-br-3xl"></div>
                <img src="/assets/body_img_one.png" alt="body_img_one" className="w-[80%] relative top-0" />
                </div>
        </div>
    )
}

export default About