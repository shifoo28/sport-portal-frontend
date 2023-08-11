import React from "react";
import HomePage from "./pages/home";
import Footer from "./components/Footer";
import Banner from "./Headers/Banner";
import BaseCategories from "./Headers/BaseCategory/BaseCategories";
import ToolBox from "./Headers/ToolBox";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <div className="flex justify-center">
        <div className="max-w-[1440px]">
          <Banner />
          <ToolBox />
          <div className="border border-b-0"></div>
          <BaseCategories />
          <div className="border border-b-0"></div>
          <Route element={<HomePage />} path="/" />
          <Footer />
        </div>
      </div>
    </Routes>
  );
}

export default App;
