import { Header } from "./components/Header";
import { MainDisplay } from "./components/MainDisplay";
import { SideMenu } from "./components/SideMenu";
import "./App.css";
import { AppRoutes } from "./router";

function App() {
  return (
    <>
      <Header />
      <div className="flex h-calc">
        <div className="w-20">
          <SideMenu />
        </div>
        <div className="">
          <AppRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
