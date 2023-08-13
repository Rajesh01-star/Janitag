export default function Card({ emoji, heading, text }) {
    return (
        <section className="border-[1px] border-black h-[460px] w-[413px] rounded-[30px] flex justify-center items-center text-[#333232]">
            <div className="w-[350px] h-[350px] flex flex-col justify-between items-start">
                <p className="h-[96px] w-[96px]">{emoji}</p>
                <div>
                    <p className="text-[40px] font-[700] leading-normal">{heading}</p>
                    <p className="text-[24px] font-[400]">{text}</p>
                </div>
            </div>
        </section>
    )
}