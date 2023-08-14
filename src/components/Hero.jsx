export default function Hero() {
    return (
        <section className="lg:w-[890px] my-20 md:w-[650px] w-screen h-fit m-auto text-[#333232] relative">
            <main className="lg:text-[56px] lg:font-[700] md:text-[40px] flex flex-col text-[32px] font-[600] leading-normal">
                <div className="md:self-start self-center">We’d love to help</div>
                <div className="md:self-center self-center">Solve Your</div>
                <div className="md:self-start md:ml-28 self-center"> Outreach Problems</div>
            </main>
            <div className="md:absolute lg:top-[30%] md:top-[25%] lg:w-[240px] lg:text-[16px] md:right-0 md:w-[180px] md:px-0 md:text-start md:mt-0 mt-4 px-[20%] text-center text-[14px] font-[400] leading-normal">
                We know that you care about your business as much as we do, and we're committed to helping you grow
            </div>
        </section>
    )
}