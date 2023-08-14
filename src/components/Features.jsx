import { cardSupply } from "../util/constants";
import Card from "./Card";

export default function Features() {
    return (
        <section className="lg:h-[1390px] h-[400px] overflow-x-auto flex lg:grid grid-cols-3 lg:gap-0 gap-4 lg:px-48 px-8">
            {/* First Row */}
            <div className="col-span-1">
                <Card
                    emoji={cardSupply[0].emoji}
                    heading={cardSupply[0].heading}
                    text={cardSupply[0].text}
                />
            </div>
            <div className="col-span-2 lg:flex hidden justify-center items-center">
                <div className="w-[643px] text-[#333232] text-[40px] font-[700] leading-normal">
                    Why choose us?<br/>
                    what makes us different?
                </div>
            </div>

            {/* Second Row */}
            {cardSupply.slice(1, 4).map((cardInfo, index) => (
                <div
                    key={index}
                    className="col-span-1 md:col-span-1"
                >
                    <Card emoji={cardInfo.emoji} heading={cardInfo.heading} text={cardInfo.text} />
                </div>
            ))}

            {/* Third Row */}
            <div className="hidden md:col-span-1 md:block"></div>
            <div className="col-start-3 col-span-1">
                <Card
                    emoji={cardSupply[4].emoji}
                    heading={cardSupply[4].heading}
                    text={cardSupply[4].text}
                />
            </div>
        </section>
    );
}
