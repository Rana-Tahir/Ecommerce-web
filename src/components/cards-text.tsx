

export default function CardText() {
  return (
    <div className="w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
      <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
        English Department
      </p>
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
      <div className='flex justify-center items-center mt-2 mb-1 text-xs'>
        <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#23A6F0]'></span>
        <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#23B56D] ml-1'></span>
        <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#E77C40] ml-1'></span>
        <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#252B42] ml-1'></span>
      </div>
    </div>
  );
}
