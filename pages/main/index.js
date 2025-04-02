import React from 'react'
import Headermain from './maincomponent/mainheader';
import Nav1 from './navbar/nav1';
import Nav2 from './navbar/nav2';
import Footer from './maincomponent/footer';
import Chapter from './chapter';


const index = () => {
  return (
    <div>
        <Headermain />
          <Nav1 />
          <Nav2 />
          <Chapter/>
          <Footer />
    </div>
  )
}

export default index;
