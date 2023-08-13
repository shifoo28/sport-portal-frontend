import React from "react";
import { useLocation } from "react-router-dom";
import { BASE_CATEGORIES } from "../../tools/links";
import AllBaseCategories from "./AllBaseCategories";
import Federations from "./Federations";

const BaseCategories = () => {
  const location = useLocation();

  return location.pathname.length <= BASE_CATEGORIES.length + 1 ? (
    <AllBaseCategories />
  ) : (
    <Federations pathname={location.pathname.slice(BASE_CATEGORIES.length)} />
  );
};

export default BaseCategories;
