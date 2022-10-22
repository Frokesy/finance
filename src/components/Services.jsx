import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <div className="lg:w-[80vw] w-[90vw] flex lg:flex-row flex-col lg:justify-between mx-auto mt-[10vh]">
                <div className="lg:w-[35%] flex flex-col">
                    <h1 className="text-[#036632] lg:text-[40px] text-[34px] font-semibold mt-[10vh]">Services</h1>
                    <p className="lg:text-[32px] text-[24px] font-semibold mt-1 mb-3">Explore What <br /> We Offer</p>
                    <span className="lg:text-[14px] text-[12px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum! Iusto ducimus nulla neque. Quos error voluptatibus labore cum. Consequatur nesciunt nisi vel. Nemo neque dolorem aliquid iste hic saepe aspernatur!</span>
                    <button className="bg-[#036632] mt-6 lg:w-[70%] w-[50%] lg:text-[20px] text-[12px] lg:p-3 p-2 text-white uppercase">View All</button>
                </div>
                <div className="lg:w-[60%] justify-end">
                    <div className="grid grid-cols-2 mt-[12vh] lg:gap-x-10 gap-x-4 lg:gap-y-16 gap-y-10 mb-[10vh]">
                        <ServiceCard 
                            header="Investment Planning"
                            img="vector_seven.png"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum!"
                        />

                        <ServiceCard 
                            header="Audit & Assurance"
                            img="vector_eight.png"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum!"
                        />

                        <ServiceCard 
                            header="Business Taxation"
                            img="vector_nine.png"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum!"
                        />

                        <ServiceCard 
                            header="Accounts Outsourcing"
                            img="vector_ten.png"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur soluta rem voluptatibus libero harum suscipit, repudiandae iusto illum!"
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services