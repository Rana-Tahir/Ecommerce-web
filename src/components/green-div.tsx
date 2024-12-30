import Image from "next/image";
import greenman from "@/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv(){
    return(
        <div className="w-full max-w-[1440px] mx-auto rounded-[5px] relative bg-[#23856D] mt-[-130px] lg:top-[3200px] border">
            <div className="w-full">
             <div className="w-full">
                <div className="w-full max-w-[1036px] mx-auto py-[112px] px-4 lg:px-0">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[30px]">
                        <div className="w-full lg:w-1/2 pt-[60px] flex flex-col gap-[30px]">
                            <h4 className="font-Montserrat font-normal text-[24px] md:text-[20px] leading-[30px] text-white">SUMMER 2020</h4>
                            <h1 className="font-Montserrat font-bold text-[48px] md:text-[40px] lg:text-[58px] leading-[1.2] lg:leading-[80px] text-white">Vita Classic Product</h1>
                            <p className="font-Montserrat font-medium text-[18px] md:text-[14px] leading-[24px] md:leading-[20px] text-white">We know how large objects will act, We know how are objects will act, We know</p>
                            <div className="flex flex-wrap gap-[34px]">
                                <h3 className="font-Montserrat font-bold text-[28px] md:text-[24px] leading-[32px] text-white">$16.48</h3>
                                <button className="rounded-[5px] px-[40px] bg-[#2DC071] py-[15px] flex gap-[10px]">
                                    <span className="font-Montserrat text-[16px] md:text-[14px] leading-[22px] text-white">ADD TO CART</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                          <Image 
                            src={greenman} 
                            alt="picman"
                            width={500}
                            height={500}
                            className="object-contain"
                            priority
                          />
                        </div>
                    </div>
                </div>
             </div>
            </div>
        </div>
    )
}