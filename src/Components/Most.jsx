import React from "react";
import icon1 from "../assets/svg/icon1.svg";
import icon2 from "../assets/svg/icon2.svg";
import red_line from '../assets/images/red_line.png'

const Most = () => {
  return (
    <>
      <div className="container max-w-[1050px] mx-auto px-3 sm:py-[80px] py-[40px] md:py-[160px]">
        <div className="flex flex-col items-center">
          <p className="text-[#96BB7C] text-[14px] ff_mont font-bold leading-[22px] tracking-[0.1px]">
            Practice Advice
          </p>
          <p className="sm:text-[40px] text-[35px] text-[#252B42] ff_mont font-bold leading-[50px] tracking-[0.2px] pt-[10px] text-center">
            Most Popular Courses
          </p>
          <p className="text-[14px] font-normal ff_mont text-[#737373] leading-[24px] tracking-[0.1px] pt-[10px] text-center">
            Problems trying to resolve the conflict between
            <span className="block text-[14px] ff_mont">
              the two major realms of Classical physics: Newtonian mechanics
            </span>{" "}
          </p>

          <div className="md:pt-[80px] pt-[40px] flex max-md:flex-wrap max-md:justify-center gap-[30px]">
            <div className="bg-white w-[328px] h-[264px] py-[35px] px-[40px] shadow flex flex-col items-center justify-center"  data-aos="fade-down">
              <img src={icon1} alt="#" />
              <p className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42] ff_mont py-[20px]">
                training Courses
              </p>
              {/* <hr className="bg-[#E74040] max-w-[50px] h-[2px]  flex justify-center items-center" /> */}
              <img src={red_line} alt="#" />
              <p className="text-[14px] font-normal ff_mont text-[#737373] leading-[20px] tracking-[0.2px] max-w-[136px] text-center pt-[20px]">The gradual accumulation and small-scale..</p>
            </div>
            <div className="bg-white w-[328px] h-[264px] py-[35px] px-[40px] shadow flex flex-col items-center justify-center max-md:mt-4" data-aos="fade-down">
              <img src={icon2} alt="#" />
              <p className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#252B42] ff_mont py-[20px]">
              2,769 online courses	
              </p>
              {/* <hr className="bg-[#E74040] max-w-[50px] h-[2px]  flex justify-center items-center" /> */}
              <img src={red_line} alt="#" />
              <p className="text-[14px] font-normal ff_mont text-[#737373] leading-[20px] tracking-[0.2px] max-w-[136px] text-center pt-[20px]">The gradual accumulation and small-scale..</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Most;
