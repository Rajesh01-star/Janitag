import { frameSupply } from "../util/constants"
import Frame from "./Frame"
export default function Actions() {
    return (
        <section className="h-[880px] my-72 flex justify-around items-center gap-32 px-20">
            <div className="w-3/5 h-full flex flex-col gap-8">
                <div className="w-[386px] h-[152px] text-[#333232] text-[54px] font-[700] leading-normal">advertising
                    optimized
                </div>
                    <img src="./images/frame.png" className="h-full w-full object-cover" alt="frame"/>
            </div>
            <div className="w-2/5 h-full flex flex-col justify-between">
                {frameSupply.map((frame)=>{
                    return <Frame id={frame.id} heading={frame.heading} text={frame.text} />
                })}
            </div>
        </section>
    )
}