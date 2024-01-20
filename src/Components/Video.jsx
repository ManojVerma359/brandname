import React from "react";

const Video = () => {
  return (
    <>
      <div className="bg-[#2D4059]">
        <div className="container mx-auto max-w-[1074px] px-3 pb-[40px] sm:pb-[80px] md:pb-[180px] pt-[40px] sm:pt-[80px] md:pt-[160px]">
          <div className="flex flex-col items-center">
            <p className="text-[14px] font-bold ff_mont text-[#96BB7C] leading-[24px] tracking-[0.2px]">
              Newsletter
            </p>
            <h4 className="text-[24px] font-bold ff_mont pt-[10px] text-white leading-[32px] tracking-[0.1px]">
              Video in Live Action
            </h4>
            <p className="text-[14px] ff_mont font-bold text-white leading-[20px] tracking-[0.1px] pt-[10px]  text-center">
              Problems trying to resolve the conflict between
              <span className="ff_mont block">
                the two major realms of Classical physics: Newtonian mechanics
              </span>{" "}
            </p>
          </div>
       
        <div className="md:mt-[80px] sm:mt-[50px] mt-[35px]  max-w-[688px] mx-auto bg-white  flex justify-between">
            <input type="text" placeholder="Your Email" className="text-[#737373] py-[15px] ps-[20px] ff_mont text-[14px] leading-[20px] tracking-[0.2px] outline-0  w-full" />
            <button className="ff_mont text-[14px] text-white leading-[20px] tracking-[0.2px] bg-[#96BB7C] hover:bg-[#FFAB71] transition-all duration-400ms py-[15px] border-[#E6E6E6] border rounded-[0px 5px 5px 0px] px-[22.5px]">
            Subscribe
            </button>
          </div>
        </div>
        </div>
      
    </>
  );
};

export default Video;
