import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import right_img from "../assets/images/right_img.png";
import left_img from "../assets/images/left_img.png";
import arrow_line from "../assets/svg/arrow_svg.svg";
import teddy from "../assets/images/teddy.webp";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [Show, setShow] = useState(false);
  if (Show === true) {
    document.body.classList.add("max-md:overflow-hidden");
  } else {
    document.body.classList.remove("max-md:overflow-hidden");
  }
  const moment = () => {
    setShow(!Show);
    setOpen(!isOpen)
  };
  return (
    <>
      <header className="relative">
        <div>
          <img
            className="absolute right-0 top-0 max-w-[12.431%] w-full z-[-1] max-lg:hidden"
            src={right_img}
            alt="#"
          />
          <img
            className="absolute left-0 top-0 max-w-[7.92%] z-[-1] max-lg:hidden"
            src={left_img}
            alt="#"
          />
        </div>

        <nav className=" py-[20px] container mx-auto max-xl:px-3 xl:ps-1 xl:pe-[5%] flex md:justify-center justify-between sm:justify-around max-w-[1322px]">
          <div className="flex md:justify-between md:w-full  items-center max-w-[966px]">
            <div className="flex items-center justify-between ">
              <h3 className="ff_mont text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1px] pe-[50px] lg:pe-[87px]">
                Brandname
              </h3>
              <ul
                className={`flex lg:justify-end justify-center gap-[21px] ${
                  Show ? "left-0" : "left-[-100%]"
                } h-full w-full  flex-col md:flex-row top-0 text-center z-20 bg-white   items-center duration-500 fixed md:static`}
              >
                <li>
                  <a onClick={moment}
                    className="ff_mont text-[14px] webkt font-bold transition-all duration-300 ease-in-out text-[#737373] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-3px] after:bg-[#737373] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                    href=""
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={moment}
                    className="ff_mont text-[14px] webkt font-bold transition-all duration-300 ease-in-out text-[#737373] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-3px] after:bg-[#737373] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                    href="#every"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a onClick={moment}
                    className="ff_mont text-[14px] webkt font-bold transition-all duration-300 ease-in-out text-[#737373] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-3px] after:bg-[#737373] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                    href="#get"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a onClick={moment}
                    className="ff_mont text-[14px] webkt font-bold transition-all duration-300 ease-in-out text-[#737373] relative after:absolute after:w-0 after:h-[2px] after:start-1 after:end-1 after:bottom-[-3px] after:bg-[#737373] hover:after:w-full hover:after:start-0 after:transition-all after:duration-300 after:ease-linear  after:rounded"
                    href="#footer"
                  >
                    Contact
                  </a>
                </li>
                <li className="sm:hidden">
                  <a
                    className="text-[#96BB7C] text-[14px] ff_mont font-bold leading-[32px] tracking-[0.1px]"
                    href=""
                  >
                    Login
                  </a>
                </li>
                <div className=" px-[25px] py-[10px] bg-[#96BB7C] hover:bg-[#FFAB71] transition-all duration-400ms rounded-[5px] flex gap-[15px] sm:hidden">
                  <button className="text-white text-[14px] leading-[32px] tracking-[0.1px] font-bold ff_mont">
                    JOIN US
                  </button>
                  <img src={arrow_line} alt="#" />
                </div>
              </ul>
            </div>

            <ul className="flex items-center gap-[45px] cursor-pointer max-sm:hidden">
              <li>
                <a
                  className="text-[#96BB7C] text-[14px] ff_mont font-bold leading-[32px] tracking-[0.1px]"
                  href=""
                >
                  Login
                </a>
              </li>
              <div className=" px-[25px] py-[10px] bg-[#96BB7C] hover:bg-[#FFAB71] transition-all duration-400ms rounded-[5px] flex gap-[15px]">
                <button className="text-white text-[14px] leading-[32px] tracking-[0.1px] font-bold ff_mont">
                  JOIN US
                </button>
                <img src={arrow_line} alt="#" />
              </div>
            </ul>
          </div>

          <div className="z-30 md:hidden " onClick={() => setShow(!Show)}>
            <button>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          </div>
        </nav>

        <div className="container-fluid container mx-auto ps-[30px] sm:ps-[132px] pe-[30px] max-w-[1440px] flex items-center max-lg:flex-wrap ">
          <div className="lg:w-[50%] w-full" data-aos="fade-right">
            <p className="text-[16px] text-[#96BB7C] ff_mont font-bold leading-[24px] tracking-[0.1px] max-sm:text-center">
              Join Us
            </p>
            <h1 className="sm:text-[58px] text-[35px] text-[#252B42] font-bold leading-[50px] sm:leading-[80px] tracking-[0.1px] ff_mont py-[30px] max-sm:text-center">
              HIGH QUALITY COURSES
            </h1>
            <p className="font-semibold max-w-[458px] text-[#737373] text-[20px] ff_mont leading-[32px] tracking-[0.2px] max-sm:text-center">
              Every day brings with it a fresh set of learning possibilities.
            </p>
            <div className="pt-[30px] gap-[10px] flex max-sm:justify-center">
              <button className="text-[14px] text-white font-bold leading-[22px] tracking-[0.2px] ff_mont bg-[#96BB7C] hover:bg-[#FFAB71] transition-all duration-400ms px-[40px] py-[10px] rounded-[5px]">
                Join Us
              </button>
              <button className="text-[14px] text-[#96BB7C] font-bold leading-[22px]  tracking-[0.2px] ff_mont border border-[#96BB7C] hover:border-[#FFAB71] hover:text-white hover:bg-[#FFAB71] transition-all duration-400ms px-[40px] py-[15px] rounded-[5px]">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] max-lg:justify-center flex w-full" data-aos="fade-left">
            <img className="w-full max-w-[593px]" src={teddy} alt="#" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
