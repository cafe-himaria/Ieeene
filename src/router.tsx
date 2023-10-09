import { Routes, Route } from "react-router-dom";
import { MainDisplay } from "./components/MainDisplay";
import { Qiita } from "./components/Qiita/Qiita";
import { Instagram } from "./components/Instagram/Instagram";

export const AppRoutes = () => {
  return (
    <MainDisplay>
      <Routes>
        <Route path="/qiita" element={<Qiita />} />
        <Route path="/instagram" element={<Instagram />} />
      </Routes>
    </MainDisplay>
  );
};
