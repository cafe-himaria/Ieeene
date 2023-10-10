import { Routes, Route } from "react-router-dom";
import { MainDisplay } from "./components/MainDisplay";
import { Instagram } from "./components/Instagram/Instagram";
import { QiitaPage } from "./components/Qiita/QiitaPage";

export const AppRoutes = () => {
  return (
    <MainDisplay>
      <Routes>
        <Route path="/qiita" element={<QiitaPage />} />
        <Route path="/instagram" element={<Instagram />} />
      </Routes>
    </MainDisplay>
  );
};
