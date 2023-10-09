import { Header } from "./components/Header";
import { SideMenu } from "./components/SideMenu";
import "./App.css";
import { AppRoutes } from "./router";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex h-calc">
        <div className="w-20">
          <SideMenu />
        </div>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
