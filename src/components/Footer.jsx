import Button from "./Button";

export default function Footer() {
    return (
        <footer>
            <section className="md:h-[442px] py-10 bg-[#333232] flex md:flex-row flex-col md:justify-between justify-center">
                <div className="md:w-1/2 flex flex-col justify-around md:px-20 px-4 md:text-start text-center md:border-r-[1px] border-[#666]">
                    <div className="md:w-[219px] md:h-[96px] h-[56px]">
                        <p className="md:text-[40px] text-[32px] md:font-[700] font-[600] text-white">Let’s Work Together</p>
                    </div>
                    <Button text={"Get Started"} />
                </div>
                <div className="md:w-1/2 flex flex-col justify-around md:items-start items-center px-20">
                    <div className="hidden md:block h-[166px] text-white">
                        <h2 className="text-[40px] font-[700] mb-[20px]">Menu</h2>
                        <ul className="gap-[18px] text-[#CBBFAC] text-[22px] font-[700] leading-normal">
                            <li>How it works</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center text-white font-[700] md:text-[32px] text-[18px] leading-normal">
                        <img src="./images/bigLogo.png" className="md:h-[120px] h-[58px] md:w-[120px] w-[58px]" alt="logo" />
                        <p className="md:mt-6 mt-2">X.com</p>
                    </div>
                </div>
            </section>
            <section className="h-[60px] bg-[#212121] text-[#6B6B6B] md:text-[20px] text-[22px] md:font-[700] font-[600] leading-normal flex justify-center items-center">Made with 🧡 by x.com</section>
        </footer>
    )
}