export default function Button({ text, type }) {
    if(type === 'big'){
         return (
        <div className="flex md:w-[268px] w-[200px] md:h-[83px] h-[63px] md:text-[22px] font-[700] text-white justify-center items-center rounded-[10px] bg-gradient-to-r from-[#FFAC75] via-[#FE6468] to-[#AD71F2] cursor-pointer hover:scale-105 transition-all ease-in-out">
            {text}
        </div>
    )
    }else{
        return (
        <div className="w-[125px] h-[51px] hidden md:flex text-white justify-center items-center rounded-[10px] bg-gradient-to-r from-[#FFAC75] via-[#FE6468] to-[#AD71F2] cursor-pointer hover:scale-105 transition-all ease-in-out">
            {text}
        </div>
    )
    }
}