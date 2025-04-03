import { useState } from "react";
import Main from "./main";
import Sidebarcomponent from "./aside/sidebar";
import Header from "./component/header";

export default function Home() {
  const [showMain, setShowMain] = useState(false); 

  return (
    <>
      <div>
        <Header />
        <div className="flex h-screen overflow-hidden">
          <aside className="w-2/12 h-full flex">
            <Sidebarcomponent onShowMain={() => setShowMain(true)} />
          </aside>

          <main className="p-2 flex relative top-[89px] right-16">
            {showMain && <Main />} 
          </main>
        </div>
      </div>
    </>
  );
}
