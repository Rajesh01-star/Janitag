import React from "react"
import Button from "./Button"
export default function Navbar() {
    const isSmallScreen = window.innerWidth < 768;
    return (
        <section className="flex justify-center pt-[50px]">
            <nav className="w-[350px] h-[60px] px-[20px] py-[12px] rounded-[20px] md:w-[685px] md:rounded-[30px] md:h-[84px] md:px-[24px] md:py-[14px] bg-white flex flex-row justify-between items-center">
                <div className="cursor-pointer">
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <ul className="flex-1 flex flex-row justify-center gap-4 cursor-pointer text-[14px] md:text-[16px] md:gap-[24px]">
                    <li>{isSmallScreen ? "Functionality" : "How it works"}</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                <Button text={"Get started"} />
            </nav>
        </section>
    )
}