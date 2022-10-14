const Team = () => {
    return (
        <div className="w-[80vw] mx-auto mt-[10vh]">
            <h1 className="text-[#036632] text-[40px] font-semibold mb-6 text-center">Meet The Team</h1>
            <div className="grid grid-cols-3 gap-x-8 shadow-2xl">
                <div className="flex flex-col items-center">
                    <img src="/assets/footer_img_one.png" alt="team" className="w-full h-full object-cover rounded-tl-[20%]" />
                    <div className="bg-[#fff] shadow-2xl w-full text-center">
                        <h2 className="text-[#036632] text-[20px] font-semibold mt-4">John Lee</h2>
                        <p className="text-[14px] font-normal mb-6">Finance Lead</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/assets/footer_img_two.png" alt="team" className="w-full h-full object-cover rounded-tl-[20%]" />
                    <div className="bg-[#fff] shadow-2xl w-full text-center">
                        <h2 className="text-[#036632] text-[20px] font-semibold mt-4">Jennifer Christine</h2>
                        <p className="text-[14px] font-normal mb-6">Finance Manager</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/assets/footer_img_three.png" alt="team" className="w-full h-full object-cover rounded-tl-[20%]" />
                    <div className="bg-[#fff] shadow-2xl w-full text-center">
                        <h2 className="text-[#036632] text-[20px] font-semibold mt-4">Obago Chris</h2>
                        <p className="text-[14px] font-normal mb-6">Head Office Manager</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team