import React from "react";

const ChapterHeader = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-900">
      <nav>
        <ul className="flex space-x-14 text-lg text-gray-800 items-center">
          <li className="font-bold border-b-4 border-black p-2">Content</li>
          <li className="  ">Course Details</li>
          <li className="  ">Revision</li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
            <img
              src="/plus.png"
              alt="icon"
              className="h-6 w-6 bg-black rounded-2xl"
            />
            <span className="text-base text-gray-400 italic">
              Add main folder
            </span>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4 mr-14 justify-between">
        <div className="relative">
          <input type="text" className="bg-white h-5 w-36  pl-10 pr-4 py-2 border border-black rounded-2xl relative right-10 " />
          <img
            src="/search.png"
            alt="Search"
            className="absolute right-40 top-1 w-5 h-5"
          />
        </div>

        <div className="flex space-x-4 ">
          <img src="/dots.png" alt="icon1" className="h-6 w-6 cursor-pointer" />
          <img
            src="/write.png"
            alt="icon2"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="/delete.png"
            alt="icon3"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="/updown.png"
            alt="icon4"
            className="h-6 w-6 cursor-pointer"
          />
          <img src="/menu.png" alt="icon5" className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default ChapterHeader;
