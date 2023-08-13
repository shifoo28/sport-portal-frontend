import React from "react";

import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import NF404 from "./pages/404";
import NewsDetails from "./pages/NewsDetails";
import {
  BASE_CATEGORIES,
  NEWS_DETAILS_PAGE,
  VIDEO_DETAILS_PAGE,
} from "./tools/links";
import VideoDetails from "./pages/VideoDetails";
import BaseCategories from "./pages/BaseCategories";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<NewsDetails />} path={NEWS_DETAILS_PAGE} />
      <Route element={<VideoDetails />} path={VIDEO_DETAILS_PAGE} />
      <Route element={<BaseCategories />} path={BASE_CATEGORIES + "/*"} />
      <Route element={<NF404 />} path="*" />
    </Routes>
  );
}

export default App;
