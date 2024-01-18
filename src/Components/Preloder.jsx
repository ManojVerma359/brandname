import React from "react";
// import preloder from "../assets/images/femal_img.png";

const PreLoder = () => {
  setTimeout(() => {
    document.getElementById("preloder").classList.add("hidden");
    document.body.classList.remove("over_hidden");
  }, 4000);
  return (
    <>
      <div
        id="preloder"
        className="min-h-screen fixed top-0 bg-white start-0  w-full z-50 flex justify-center items-center"
      >

           <div
        className="w-24 h-24 rounded-full animate-spin border-y-8 border-solid border-[#FFAB71] border-t-transparent shadow-md">
    </div>
      </div>
    </>
  );
};

export default PreLoder;
