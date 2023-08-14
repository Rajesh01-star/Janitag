export default function Frame({ id, heading, text }) {
    return (
        <section className="lg:w-[409px] w-[170px] lg:h-[111px] flex flex-col lg:flex-row justify-center items-center lg:gap-[47px] gap-4 text-[#333232] font-[700]">
            <div className="lg:h-[97px] lg:w-[197px] p-4 lg:p-0 rounded-full flex justify-center items-center lg:text-[48px] md:text-[28px] font-[400] text-black border-[1px] border-black">
                0{id}
            </div>
            <div className="lg:block flex flex-col items-center">
                <p className="lg:text-[48px] text-[28px]">{heading}</p>
                <p className="lg:text-[16px] text-[14px] lg:text-start text-center leading-normal">{text}</p>
            </div>
        </section>
    )
}