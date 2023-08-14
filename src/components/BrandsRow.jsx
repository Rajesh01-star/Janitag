import { brandsSupply } from "../util/constants"
export default function BrandsRow() {
    return (
        <section className="flex flex-col md:flex-row lg:px-20 md:px-10 px-4 items-center lg:justify-evenly">
            <div className="w-[200px] md:w-[240px] text-[24px] lg:text-[32px] text-center md:text-start text-[#CBBFAC] font-[600] md:font-[700] leading-normal">Brands we've supported</div>
            <div className="flex gap-4 mt-4 md:mt-0 md:gap-20">
                {brandsSupply.map((brand) => {
                    return (
                        <div key={brand.id} className="flex justify-center items-center">
                            <img src={brand.image} className="h-[32px] md:h-[50px]" alt={`brand-${brand.id}`} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}