import React from "react";

const Chapternav = () => {
  return (
    <>
      <div className="flex justify-between bg-white mt-2 ">
        <div className="flex font-thik text-xl p-4 space-x-4 items-center text-gray-700">
          <img src="leftarrow.png" className="bg-black h-8 w-8 rounded-3xl " />
          <span className="flex underline items-center gap-2">
            Chapter 1 <img src="rightarrow.png" className="h-4 w-4" />
          </span>
          <span className="flex underline items-center gap-2">
            Chapter 1.1 <img src="rightarrow.png" className="h-4 w-4" />
          </span>
          <span className="flex  items-center gap-2 font-bold bg-gray-50 p-2 rounded-lg h-12 w-40">
            <img src="square.png" className="h-6 w-6" /> Chapter 1{" "}
          </span>
        </div>
        <div className="flex relative right-36 items-center space-x-5 ">
          {" "}
          <img src="info.png" className=" h-4 w-4 rounded-3xl " />
          <span className="flex justify-evenly items-center  font-thick text-xs bg-gray-50 p-2 rounded-lg h-12 w-40">
            <img src="eye.png" className="h-4 w-4" /> Access to
            <img src="dropdown.png" className="h-4 w-4" />
          </span>
          <span className="flex justify-evenly items-center  font-thick text-xs bg-gray-50 p-2 rounded-lg h-12 w-28">
            Actions
            <img src="dropdown.png" className="h-4 w-4" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Chapternav;
