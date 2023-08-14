import { frameSupply } from "../util/constants"
import Frame from "./Frame";
export default function Actions() {
    return (
        <section className="md:h-[880px] my-20 md:my-80 flex flex-col md:flex-row justify-around items-center md:gap-32 gap-6 md:px-20 px-10">
            <div className="md:w-3/5 h-full flex flex-col-reverse md:flex-col gap-8">
                <div className="md:w-[386px] md:h-[152px] text-[#333232] md:text-[54px] text-[32px] md:font-[700] font-[600] md:text-start text-center leading-normal">
                    advertising optimized
                </div>
                <img src="./images/frame.png" className="md:h-full h-[400px] w-full object-cover" alt="frame" />
            </div>
            <div className="w-2/5 h-full hidden md:flex flex-col">
                {frameSupply.map((frame) => {
                    return <>
                        <Frame id={frame.id} heading={frame.heading} text={frame.text} />
                        {frame.id !== 3 &&
                            <div className="space-dotted border-l-2 border-dotted border-black flex-1 ml-12"></div>
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