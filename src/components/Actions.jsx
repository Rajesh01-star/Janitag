import { frameSupply } from "../util/constants"
import Frame from "./Frame";
export default function Actions() {
    return (
        <section className="lg:h-[880px] my-20 lg:my-80 md:my-60 flex flex-col lg:flex-row justify-around items-center lg:gap-32 md:gap-10 gap-6 md:px-20 px-10">
            <div className="lg:w-3/5 h-full flex flex-col-reverse md:flex-col items-center lg:items-start gap-8">
                <div className="md:w-[386px] lg:h-[152px] h-[132px] text-[#333232] lg:text-[54px] md:text-[40px] text-[32px] md:font-[700] font-[600] lg:text-start text-center leading-normal">
                    advertising optimized
                </div>
                <img src="./images/frame.png" className="lg:h-full md:h-[450px] h-[400px] w-full object-cover" alt="frame" />
            </div>
            <div className="lg:w-2/5 px-10 lg:px-0 h-full hidden md:flex md:flex-row lg:flex-col">
                {frameSupply.map((frame) => {
                    return <>
                        <Frame id={frame.id} heading={frame.heading} text={frame.text} />
                        {frame.id !== 3 &&
                            <div className="lg:border-l-2 border-dotted border-black flex-1 ml-12"></div>
                        }
                    </>
                })}
            </div>
            <div className="flex md:hidden list-none gap-8 text-[22px] font-[400] cursor-pointer">
                <li>apply</li>
                <li>review</li>
                <li>iterate</li>
            </div>
        </section>
    )
}