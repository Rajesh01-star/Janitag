export default function Frame({id,heading,text}){
    return(
        <section className="w-[409px] h-[111px] flex justify-center items-center gap-[47px] text-[#333232] font-[700] ">
            <div className="w-[180px] h-[97px] rounded-full flex justify-center items-center text-[48px] text-black border-2 border-black">{id}</div>
            <div>
                <p className="text-[48px] ">{heading}</p>
                <p className="text-[16px] leading-normal">{text}</p>
            </div>
        </section>
    )
}