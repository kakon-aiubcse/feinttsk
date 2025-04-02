import Main from './main';
import Sidebarcomponent from "./aside/sidebar";
import Header from "./component/header";


export default function Home() {
  return (
    <>
      <Header />
      <div>
        <aside>
          <Sidebarcomponent />
        </aside>
        <Main/>
      </div>
    </>
  );
}
