import React from "react";

const Headermain = () => {
  return (
    <>
      <div className="flex w-full justify-between bg-gray-50 ">
        <div className="w-2/3 flex items-center justify-start px-4 space-x-4 ">
          <button className="font-extralight flex items-center justify-between bg-white text-lg text-black px-2 rounded-md">
            Course for Chemistry
            <img src="/dropdown.png" className="h-6 w-6" />
          </button>
          <div className="relative h-8 border-r-2 border-gray-400 "></div>
          <button className="font-extralight flex items-center justify-between bg-white  text-black px-2 text-base rounded-md">
            All Batches
            <img src="/dropdown.png" className="h-6 w-6" />
          </button>
        </div>
        <div className="w-1/3  flex items-center justify-end p-6">
          <button className="flex items-center text-white bg-black p-2 rounded-lg mr-2 whitespace-nowrap">
            <img src="/class.png" className="bg-white h-4 w-4 mr-2" />
            Take Class
          </button>

          <img
            src="/user.png"
            className="flex bg-blue-800 rounded-xl h-6 w-6"
          />
          <img
            src="/femaleuser.png"
            className="flex bg-blue-800 rounded-xl h-6 w-6"
          />

          <span className="text-xs bg-white text-gray-700 mr-10 pl-4 pr-2 rounded-sm">Add TA</span>
        </div>
      </div>
    </>
  );
};

export default Headermain;
