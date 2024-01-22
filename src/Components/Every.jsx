import React from "react";
import img_1 from "../assets/images/img_1.jpg";
import img_2 from "../assets/images/img_2.jpg";
import heart_icon from "../assets/svg/heart_icon.svg";
import eyes_icon from "../assets/svg/eys_icon.svg";
import amazon_icon from "../assets/svg/amzon_icon.svg";
import star_img from "../assets/svg/star_img.svg";
import dwnlod_icon from "../assets/svg/dwnlod_icon.svg";
import arrow_l from "../assets/svg/arow_l.svg";

const Every = () => {
  return (
    <>
      <div id="every" className="container max-w-[1074px] mx-auto px-3 sm:py-[80px] py-[20px] md:py-[160px]">
        <div className="flex flex-col items-center">
          <p className="text-[#96BB7C] text-[14px] font-bold tracking-[0.2px] leading-[24px] ff_mont">
            Practice Advice
          </p>
          <h3 className="text-[#252B42] sm:text-[40px] text-[35px] font-bold tracking-[0.2px] leading-[50px] ff_mont pt-[10px] text-center">
            Every Client Matters
          </h3>
          <p className="text-[14px] text-[#737373] ff_mont font-normal tracking-[0.2px] leading-[20px] max-w-[469px] text-center pt-[10px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <div className="md:pt-[80px] pt-[40px] flex max-md:flex-wrap max-md:justify-center items-center gap-[15px]">
            <div data-aos="fade-right">
              <div className="relative">
                <div className="overflow-hidden">
                <img className="max-w-[348px] hover:scale-110 transition-all duration-300ms" src={img_1} alt="#" />
                </div>
                <p className="ff_mont text-white text-[14px] tracking-[0.2px] leading-[24px] font-bold bg-[#e74040] px-[10px] inline rounded-[3px] absolute top-[20px] left-[20px]">
                  Sale
                </p>
                <img
                  className="absolute bottom-[24px] pl-[154px] cursor-pointer"
                  src={amazon_icon}
                  alt="#"
                />
                <img
                  className="absolute bottom-[24px] pl-[204px] cursor-pointer"
                  src={eyes_icon}
                  alt="#"
                />
                <img
                  className="absolute bottom-[24px] pl-[104px] cursor-pointer"
                  src={heart_icon}
                  alt="#"
                />
              </div>
              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#96BB7C] text-[14px] font-bold leading-[24px] tracking-[0.2px] ff_mont">
                    Books Liberary{" "}
                  </p>
                  <img src={star_img} alt="#" />
                </div>
                <p className="text-[#252B42] text-base font-bold leading-[24px] tracking-[0.1px] ff_mont max-w-[131px] pt-[10px]">
                  Get Quality Education
                </p>
                <p className="text-[#737373] text-[14px] font-normal leading-[20px] tracking-[0.1px] ff_mont max-w-[280px] pt-[10px]">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="pt-[10px] flex gap-[10px] items-center">
                  <img src={dwnlod_icon} alt="#" />
                  <p className="text-[#737373] text-[14px] font-bold leading-[24px] tracking-[0.2px] ff_mont">
                    15 Sales
                  </p>
                </div>
                <div className="pt-[10px] flex gap-[5px]">
                  <p className="text-[#BDBDBD] text-[16px] font-bold leading-[24px] tracking-[0.1px] ff_mont">
                    $16.48
                  </p>
                  <p className="text-[#FFAB71] text-[16px] font-bold leading-[24px] tracking-[0.1px] ff_mont">
                    $16.48
                  </p>
                </div>
                <div className="px-[20px] py-[10px] border border-[#96BB7C] shdow transiton-all duration-300ms   text-[#96BB7C] rounded-[37px] flex inline-flex mt-[10px] gap-[10px] items-center cursor-pointer">
                  <p className="ff_mont   text-[14px] font-bold tracking-[0.2px] leading-[24px] ">
                    Learn More
                  </p>
                  <img className="" src={arrow_l} alt="#" />
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="relative">
                <div className="overflow-hidden">
                <img className="max-w-[348px] hover:scale-110 transition-all duration-300ms" src={img_2} alt="#" />

                </div>
                <p className="ff_mont text-white text-[14px] tracking-[0.2px] leading-[24px] font-bold bg-[#e74040] px-[10px] inline rounded-[3px] absolute top-[20px] left-[20px]">
                  Sale
                </p>
                <img
                  className="absolute bottom-[24px] pl-[154px] cursor-pointer  "
                  src={amazon_icon}
                  alt="#"
                />
                <img
                  className="absolute bottom-[24px] pl-[204px] cursor-pointer"
                  src={eyes_icon}
                  alt="#"
                />
                <img
                  className="absolute bottom-[24px] pl-[104px] cursor-pointer"
                  src={heart_icon}
                  alt="#"
                />
              </div>
              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#96BB7C] text-[14px] font-bold leading-[24px] tracking-[0.2px] ff_mont">
                  Training Courses{" "}
                  </p>
                  <img src={star_img} alt="#" />
                </div>
                <p className="text-[#252B42] text-base font-bold leading-[24px] tracking-[0.1px] ff_mont max-w-[131px] pt-[10px]">
                Video in Live Action
                </p>
                <p className="text-[#737373] text-[14px] font-normal leading-[20px] tracking-[0.1px] ff_mont max-w-[280px] pt-[10px]">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="pt-[10px] flex gap-[10px] items-center">
                  <img src={dwnlod_icon} alt="#" />
                  <p className="text-[#737373] text-[14px] font-bold leading-[24px] tracking-[0.2px] ff_mont">
                    15 Sales
                  </p>
                </div>
                <div className="pt-[10px] flex gap-[5px]">
                  <p className="text-[#BDBDBD] text-[16px] font-bold leading-[24px] tracking-[0.1px] ff_mont">
                    $16.48
                  </p>
                  <p className="text-[#FFAB71] text-[16px] font-bold leading-[24px] tracking-[0.1px] ff_mont">
                    $16.48
                  </p>
                </div>
                <div className="px-[20px] py-[10px] shdow transiton-all duration-300ms border border-[#96BB7C] rounded-[37px] flex inline-flex mt-[10px] gap-[10px] items-center cursor-pointer">
                  <p className="ff_mont text-[#96BB7C] text-[14px] font-bold tracking-[0.2px] leading-[24px]">
                    Learn More
                  </p>
                  <img src={arrow_l} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Every;
