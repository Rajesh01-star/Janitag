import Button from "./Button";

export default function Footer() {
    return (
        <footer>
            <section className="h-[442px] bg-[#333232] flex justify-between">
                <div className="w-1/2 flex flex-col justify-around px-20 border-r-[1px] border-[#666]">
                    <div className="w-[219px] h-[96px]">
                        <p className="text-[40px] font-[700] text-white">Let’s Work Together</p>
                    </div>
                    <Button text={"Get Started"} />
                </div>
                <div className="w-1/2 flex flex-col justify-around items-start px-20">
                    <div className="h-[166px] text-white">
                        <h2 className="text-[32px] font-[700] mb-[20px]">Menu</h2>
                        <ul className="gap-[18px] text-[#CBBFAC] text-[21px] font-[700] leading-normal">
                            <li>How it works</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center text-white font-[700] text-[32px] leading-normal">
                        <img src="./images/bigLogo.png" alt="logo" />
                        <p className="mt-6">X.com</p>
                    </div>
                </div>
            </section>
            <section className="h-[60px] bg-[#212121] text-[#6B6B6B] text-[20px] font-[700] leading-normal flex justify-center items-center">Made with 🧡 by x.com</section>
        </footer>
    )
}