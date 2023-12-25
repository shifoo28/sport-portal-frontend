import React from "react";

import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import NF404 from "./pages/404";
import NewsDetails from "./pages/News/NewsDetails";
import {
  ABOUTUS,
  BASE_CATEGORIES,
  NEWS_ALL,
  NEWS_DETAILS_PAGE,
  VIDEO_DETAILS_PAGE,
  VIDEO_NEWS_ALL,
} from "./tools/links";
import Footer from "./components/Footer";
import Banner from "./components/Headers";
import BaseCategoriesList from "./components/Headers/BaseCategory";
import ToolBox from "./components/Headers/ToolBox";
import NewsAll from "./pages/News";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { GET_MAIN, GET_WEATHER } from "./redux/types";
import AboutUs from "./pages/AboutUs";
import BaseCategories from "./pages/BaseCategories";
import VideoNewsAll from "./pages/VideoNews";
import VideoNewsDetails from "./pages/VideoNews/VideoNewsDetails";

const App = () => {
  const dispatch = useDispatch();
  dispatch({ type: GET_MAIN });
  dispatch({ type: GET_WEATHER });

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
            <AboutUs />
          </TemplateApp>
        }
        path={ABOUTUS}
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
            <VideoNewsDetails />
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
            <NewsAll />
          </TemplateApp>
        }
        path={NEWS_ALL}
      />
      <Route
        element={
          <TemplateApp>
            <VideoNewsAll />
          </TemplateApp>
        }
        path={VIDEO_NEWS_ALL}
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
  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px]">
        <Banner />
        <ToolBox />
        <div className="border border-b-0"></div>
        <BaseCategoriesList />
        <div className="border border-b-0"></div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default App;
