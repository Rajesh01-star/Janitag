export default function Card({ emoji, heading, text }) {
    return (
        <section className="border-[1px] border-black lg:h-[460px] h-[360px] lg:w-[413px] w-[313px] rounded-[20px] md:rounded-[30px] flex justify-center items-center text-[#333232] cursor-pointer">
            <div className="lg:w-[350px] w-[250px] lg:h-[350px] h-[250px] flex flex-col justify-between items-start">
                <p className="lg:text-[66px] text-[56px]">{emoji}</p>
                <div>
                    <p className="lg:text-[40px] md:text-[28px] text-[22px] md:font-[700] font-[600] leading-normal">{heading}</p>
                    <p className="md:text-[22px] text-[18px] font-[400]">{text}</p>
                </div>
            </div>
        </section>
    )
}