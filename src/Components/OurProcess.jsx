import React from "react";
// import v_img from "../assets/images/video_img.jpg";
import img_s from '../assets/images/img_s.webp'
import play_icon from '../assets/images/play_icon.png'

const OurProcess = () => {
  return (
    <>
      <div className="max-w-[1050px] mx-auto px-3 container sm:py-[80px] py-[40px] md:py-[160px]">
        <div className="flex flex-col items-center "data-aos="zoom-in-down">
          <p className="text-[#96BB7C] text-[14px] ff_mont font-bold leading-[22px] tracking-[0.1px]">
            Practice Advice
          </p>
          <p className="text-[24px] text-[#252B42] ff_mont font-bold leading-[32px] tracking-[0.1px] pt-[10px]">
            Our Popular Courses
          </p>
          <p className="text-[14px] font-normal ff_mont text-[#737373] leading-[24px] tracking-[0.1px] pt-[10px] text-center">
            Problems trying to resolve the conflict between
            <span className="block text-[14px] ff_mont">
              the two major realms of Classical physics: Newtonian mechanics
            </span>{" "}
          </p>
          <div className="md:pt-[80px] pt-[40px] relative">
            <img className="w-[100%] w-[688px] " src={img_s} alt="#" />
            <div>
              <img className="absolute top-[50%] left-[45%] max-sm:w-[15%] cursor-pointer" src={play_icon} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
