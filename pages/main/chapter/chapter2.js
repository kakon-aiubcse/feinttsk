import React from 'react'

const Chapter2 = () => {
  return (
    <>
       <div className="flex bg-white w-full">
        <div className="w-full h-20 flex items-start justify-between border border-gray-200 p-4">
          <div className="flex space-x-4 ">
            <img src="square.png"  className="h-8 w-8" />
            <img src="files.png" className="h-12 w-12"/>
            <span className="text-xl font-bold  text-gray-700">Chapters 2 revision notes.pdf</span>
           
          </div>
          <div className="flex items-center space-x-2 relative right-28 ">
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
       
      </div>
    </>
  )
}

export default Chapter2;
