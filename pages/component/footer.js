import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex justify-evenly items-center bg-white space-x-8 w-full relative  h-28 border border-gray-300'>
      <div className='flex items-center gap-2 border-2 border-dashed border-black p-4 rounded-2xl '>
        <img src ="addfile.png" className='h-6 w-6  rounded-xl '/>
        <span className='text-lg font-thin '>Add Folder</span>
      </div>
      <div className='flex items-center gap-2 border-2 border-dashed border-black p-4 rounded-2xl '>
        <img src ="uploadfile.png"className='h-6 w-6  rounded-xl '/>
        <span className='text-lg font-thin '>Upload File</span>
      </div>
      <div className='flex items-center gap-2 border-2 border-dashed border-black p-4 rounded-2xl '>
        <img src ="uploadfolder.png" className='h-6 w-6  rounded-xl '/>
        <span className='text-lg font-thin '>Upload Folder</span>
      </div>
      <div className='flex items-center gap-2 border-2 border-dashed border-black p-4 rounded-2xl '>
        <img src ="edittext.png" className='h-6 w-6  rounded-xl  border border-black'/>
        <span className='text-lg font-thin '>Add Text</span>
      </div>
      <div className='flex items-center gap-2 border-2 border-dashed border-black p-4 rounded-2xl '>
        <img src ="paste.png" className='h-6 w-6  rounded-xl '/>
        <span className='text-lg font-thin '>Paste</span>
      </div>

    </div>
    </>
  )
}

export default Footer
