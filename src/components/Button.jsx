export default function Button({ text, type }) {
    return (
        <div className={`${type === 'big' ? 'w-[268px] h-[83px] text-[26px] font-[700]' : 'w-[125px] h-[51px]'} text-white flex justify-center items-center rounded-[10px] bg-gradient-to-r from-[#FFAC75] via-[#FE6468] to-[#AD71F2] cursor-pointer`}>
            {text}
        </div>
    )
}