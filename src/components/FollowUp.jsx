import Button from "./Button";

export default function FollowUp() {
    return (
        <section className="flex flex-col justify-center items-center gap-2 mt-64 mb-32">
            <h1 className="text-[64px] font-[700] text-[#333232] leading-normal">Still not convinced?</h1>
            <p className="w-1/2 text-center text-[20px] font-[400] text-[#5C5C5B] leading-normal mb-8">Schedule a call to learn more about how we can change the way you view sourcing your ads...forever.</p>
            <Button text={"schedule a call"} type={"big"} />
        </section>
    )
}