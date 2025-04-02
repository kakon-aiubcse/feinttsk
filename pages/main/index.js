import React from "react";
import Headermain from "./maincomponent/mainheader";
import Nav1 from "./navbar/nav1";
import { useRouter } from "next/router";
import Chapter from './chapter'

const index = () => {
  const router = useRouter();
  const { tab } = router.query;
  return (
    <div className="flex flex-col w-screen fixed h-screen overflow-hidden pr-40">
      <Headermain />
      <Nav1 />
      {tab === "Materials" && <Chapter />}
    
    </div>
  );
};

export default index;
