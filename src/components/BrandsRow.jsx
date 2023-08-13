import { brandsSupply } from "../util/constants"
export default function BrandsRow() {
    return (
        <section className="flex px-20 justify-evenly mt-20">
            <div className="w-[232px] text-[32px] text-[#CBBFAC] font-[700] leading-normal">Brands we've supported</div>
            <div className="flex gap-20">
                {brandsSupply.map((brand) => {
                    return (
                    <div className="flex justify-center items-center">
                    <img src={brand.image} className="h-[50px]" key={brand.id} alt={`brand-${brand.id}`} />
                    </div>
                    )
                })}
            </div>
        </section>
    )
}