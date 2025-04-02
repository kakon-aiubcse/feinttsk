import Main from "./main";
import Sidebarcomponent from "./aside/sidebar";
import Header from "./component/header";

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
        <div className="flex h-screen">
          <aside className="w-2/12 h-full flex ">
            <Sidebarcomponent />
          </aside>

          <main className=" p-2 flex relative top-[89px] right-16 " >
            <Main />
          </main>
        </div>{" "}
      </div>
    </>
  );
}
