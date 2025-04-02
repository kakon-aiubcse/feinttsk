import React from "react";

const Header = () => {
  return (
    <div className="flex w-full">
      <div className="w-2/3 flex items-center justify-between p-8 ">
        <div className="text-gray-600 font-semibold text-2xl ml-6">
          Teacher's Center
        </div>
        <div className="flex justify-normal items-center space-x-8 ">
          <img src="/cco.png" className="h-6 w-6" />
          <img src="/bell.png" className="h-6 w-6" />
          <div className="relative h-12 border-r border-black "></div>
        </div>
      </div>
      <div className="w-1/3  flex items-center justify-start p-8">
      <img src="/user.png" className="flex bg-blue-800 rounded-xl h-8 w-8" />
        <div className="flex flex-col space-x-5 ">
        
          <span className="font-bold ml-5 ">Sir1</span>
          <label className="text-gray-700">Chemistry | Level 3</label>
        </div>
      </div>
    </div>
  );
};

export default Header;
