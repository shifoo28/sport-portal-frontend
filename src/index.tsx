import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToolBox from "./Headers/ToolBox";
import "./assets/tailwind.css";
import Banner from "./Headers/Banner";
import BaseCategories from "./Headers/BaseCategory/BaseCategories";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex justify-center">
          <div className="max-w-[1440px]">
            <Banner />
            <ToolBox />
            <div className="border border-b-0"></div>
            <BaseCategories />
            <div className="border border-b-0"></div>
            <App />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
