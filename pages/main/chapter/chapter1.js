import React from "react";

const Chapter1 = () => {
  return (
    <>
      <div className="flex bg-white w-full">
        <div className="w-9/12 h-40 flex items-start justify-between border border-gray-200 p-4">
          <div className="flex space-x-4 items-center ">
            <img src="square.png"  className="h-8 w-8" />
            <img src="folder.png" className="h-12 w-12"/>
            <span className="text-xl font-bold underline text-gray-700">Chapters 1</span>
            <img src="uparrow.png" className="h-6 w-6"/>
          </div>
          <div className="flex items-center space-x-2 ">
            <img src="infobutton.png" className=" h-4 w-4 rounded-3xl " />
            <span className="flex justify-evenly items-center  font-thick text-xs bg-gray-50 p-2 rounded-lg h-12 w-40">
              <img src="eye.png" className="h-4 w-4" /> Access to
              <img src="dropdown.png" className="h-4 w-4" />
            </span>
            <span className="flex justify-evenly items-center  font-thick text-xs bg-gray-50 p-2 rounded-lg h-12 w-28">
              Actions
              <img src="dropdown.png" className="h-4 w-4" />
            </span> 
            <span className="absolute top-[450px] left-[620px] text-gray-500 text-xs font-medium"><p><b>Visible to: </b>Batch 1, Batch 2, Batch 3, For both online & physical students </p></span>
          </div>
         
        </div>
        <div className="w-3/12 h-40 flex flex-col p-2 text-sm border font-normal border-gray-200">
         <p><b>Created on: </b>25/02/2025 10:35pm</p>
         <p><b>Created by: </b>Sir</p>
         <p><b>Last Modified: </b>Friday, 25/02/2025,<br />10:35pm</p>

         <p><b>Last Modifief by: </b>Sir</p>
         <p><b>Kind: </b>PDF Document</p>
         <p><b>Size: </b>23 MB</p>
        </div>
      </div>
    </>
  );
};

export default Chapter1;
