import React from "react";

import HomePage from "./pages/home";
import { Route, Routes, useNavigate } from "react-router-dom";
import NF404 from "./pages/404";
import NewsDetails from "./pages/NewsDetails";
import {
  BASE_CATEGORIES,
  NEWS_DETAILS_PAGE,
  SPORT_NEWS_ALL,
  VIDEO_DETAILS_PAGE,
} from "./tools/links";
import VideoDetails from "./pages/VideoDetails";
import BaseCategories from "./pages/BaseCategories";
import Footer from "./components/Footer";
import Banner from "./components/Headers";
import BaseCategoriesList from "./components/Headers/BaseCategory";
import ToolBox from "./components/Headers/ToolBox";
import SportNewsAll from "./pages/SportNewsAll";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { GET_MAIN } from "./redux/types";

const App = () => {
  const dispatch = useDispatch();
  dispatch({ type: GET_MAIN });

  return (
    <Routes>
      <Route
        element={
          <TemplateApp>
            <HomePage />
          </TemplateApp>
        }
        path="/"
      />
      <Route
        element={
          <TemplateApp>
            <NewsDetails />
          </TemplateApp>
        }
        path={NEWS_DETAILS_PAGE}
      />
      <Route
        element={
          <TemplateApp>
            <VideoDetails />
          </TemplateApp>
        }
        path={VIDEO_DETAILS_PAGE}
      />
      <Route
        element={
          <TemplateApp>
            <BaseCategories />
          </TemplateApp>
        }
        path={BASE_CATEGORIES + "/*"}
      />
      <Route
        element={
          <TemplateApp>
            <SportNewsAll />
          </TemplateApp>
        }
        path={SPORT_NEWS_ALL}
      />
      <Route
        element={
          <TemplateApp>
            <NF404 />
          </TemplateApp>
        }
        path="*"
      />
    </Routes>
  );
};

const TemplateApp = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-center"
      onScroll={() => {
        console.log(window.scrollY);
      }}
    >
      <div className="max-w-[1440px]">
        <Banner />
        <ToolBox navigate={navigate} />
        <div className="border border-b-0"></div>
        <BaseCategoriesList />
        <div className="border border-b-0"></div>
        <Navbar />
        {children}
        <Footer navigate={navigate} />
      </div>
    </div>
  );
};

export default App;
