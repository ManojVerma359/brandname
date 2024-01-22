import React from "react";
import girl_img from "../assets/images/girl_img.png";
import arrow_l from "../assets/svg/arow_l.svg";

const Popular = () => {
  return (
    <>
      <div className="container max-w-[1074px] mx-auto px-3 pt-[40px] sm:pt-[80px] md:pt-[121px] pb-[40px] sm:pb-[80px] md:pb-[160px] flex justify-between items-center max-lg:flex-wrap-reverse max-lg:justify-center">
        <div className="lg:w-[50%] lg:pt-0 pt-5"data-aos="fade-right">
          <img className="max-w-[544px] w-full" src={girl_img} alt="#" />
        </div>
        <div className="lg:w-[41.6%] flex flex-col max-lg:justify-center "data-aos="fade-left">
          <hr className="bg-[#e74040] h-[7px] w-[94px] max-sm:ms-[20%]" />
          <h3 className="ff_mont text-[#252B42] sm:text-[40px] text-[35px] leading-[50px] tracking-[0.2px] font-bold pt-[15px] sm:pt-[35px] max-sm:text-center">
            Our Popular <span className="ff_mont lg:block">Courses</span>
          </h3>
          <p className="ff_mont text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] font-normal  lg:max-w-[351px]  pt-[35px] max-sm:text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <div className="pt-[35px] flex gap-[10px] hover:gap-[15px] hover:transition-all hover:duration-300ms transition-all duration-300ms  items-center max-sm:justify-center cursor-pointer">
            <p className="ff_mont text-[#96BB7C] text-[14px] font-bold tracking-[0.2px] leading-[24px]">
              Learn More
            </p>
            <img  src={arrow_l} alt="#" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
