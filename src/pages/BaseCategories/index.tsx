import React from "react";
import { Route, Routes } from "react-router-dom";
import { SPORTS } from "../../tools/links";
import Sports from "./Sports";

const BaseCategories = () => {
  return (
    <Routes>
      <Route element={<Sports />} path={SPORTS} />
      <Route element={<BaseCategories />} path="*" />
    </Routes>
  );
};

export default BaseCategories;
