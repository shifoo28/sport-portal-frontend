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
import { useDispatch, useSelector } from "react-redux";
import { GET_LOCAL_NEWS, GET_MAIN, GET_VIDEO_NEWS } from "./redux/types";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";

const App = () => {
  const dispatch = useDispatch();
  dispatch({ type: GET_MAIN });

  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route
        element={
          <TemplateApp>
            <AboutUs />
          </TemplateApp>
        }
        path="/aboutus"
      />
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
  const dispatch = useDispatch();
  dispatch({ type: GET_LOCAL_NEWS });
  dispatch({ type: GET_VIDEO_NEWS });

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
