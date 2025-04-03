import React from 'react'
import Chapterheader from './chapterheader';
import Chapternav from './chapternav';
import Chapter1 from './chapter1';
import Chapter2 from './chapter2';
import Footer from '@/pages/component/footer';

const index = () => {
  return (
    <>
    <div className='bg-gray-50 pl-5' >
        <Chapterheader/>
        
      

    </div>
    <div className= 'h-screen bg-gray-50 pl-5' >
    <Chapternav/>
       <Chapter1/> 
      <Chapter2/>
      <Footer/>

    </div></>
  )
}

export default index;
