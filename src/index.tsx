import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToolBox from "./Headers/ToolBox/ToolBox";
import "./assets/tailwind.css";
import Banner from "./Headers/Banner";
import BaseCategories from "./Headers/BaseCategory/BaseCategories";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <Banner />
      <ToolBox />
      <hr />
      <BaseCategories />
      <hr />
      <App />
    </div>
  </React.StrictMode>
);
