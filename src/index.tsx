import React from "react";
import "./assets/tailwind.css";
import store from "./redux/store";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import Banner from "./Headers";
import BaseCategories from "./Headers/BaseCategory/BaseCategories";
import ToolBox from "./Headers/ToolBox";

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
