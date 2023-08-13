import React from "react"
import Button from "./Button"
export default function Navbar() {
    return (
        <section className="flex justify-center pt-[47px]">
            <nav className="w-[685px] h-[84px] bg-white flex flex-row justify-between items-center px-[24px] py-[14px] rounded-[30px]">
                <div>
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <ul className="flex-1 flex flex-row justify-center gap-[24px]">
                    <li>how it works</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                <Button text={"Get started"} />
            </nav>
        </section>
    )
}