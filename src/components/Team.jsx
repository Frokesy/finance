const Team = () => {
    return (
        <div className="lg:w-[80vw] w-[90vw] mx-auto mt-[15vh]">
            <h1 className="text-[#036632] lg:text-[40px] text-[34px] font-semibold mb-6 text-center">Meet The Team</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-y-0 gap-y-8 lg:gap-x-8">
                <div className="flex flex-col items-center">
                    <img src="/assets/footer_img_one.png" alt="team" className="w-full h-full object-cover rounded-tl-[20%]" />
                    <div className="bg-[#fff] shadow-2xl w-full text-center">
                        <h2 className="text-[#036632] lg:text-[20px] text-[16px] font-semibold mt-4">John Lee</h2>
                        <p className="lg:text-[14px] text-[12px] font-normal mb-6">Finance Lead</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/assets/footer_img_two.png" alt="team" className="w-full h-full object-cover rounded-tl-[20%]" />
                    <div className="bg-[#fff] shadow-2xl w-full text-center">
                        <h2 className="text-[#036632] lg:text-[20px] text-[16px] font-semibold mt-4">Jennifer Christine</h2>
                        <p className="lg:text-[14px] text-[12px] font-normal mb-6">Finance Manager</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/assets/footer_img_three.png" alt="team" className="w-full h-full object-cover rounded-tl-[20%]" />
                    <div className="bg-[#fff] shadow-2xl w-full text-center">
                        <h2 className="text-[#036632] lg:text-[20px] text-[16px] font-semibold mt-4">Obago Chris</h2>
                        <p className="lg:text-[14px] text-[12px] font-normal mb-6">Head Office Manager</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team