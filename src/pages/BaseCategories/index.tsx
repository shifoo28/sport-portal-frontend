import React, { createElement } from "react";
import { useLocation } from "react-router-dom";
import {
  BASE_CATEGORIES,
  COMPETITIONS,
  GYMSANDCLUBS,
  HEALTHCARE,
  HEALTHYFOOD,
  SPORTSHOPS,
} from "../../tools/links";
import Federations from "./Federations";
import BCFDetail from "../../components/Details/BCFDetail";
import GymsAndClubs from "../../components/BCFederations/GymsandClubs";
import HealthCare from "../../components/BCFederations/HealthCare";
import HealthyFood from "../../components/BCFederations/HealthyFood";
import Competitions from "../../components/BCFederations/Competitions";
import AllCategories from "./AllCategories";
import Shop from "../../components/BCFederations/Shop";

const components = [
  GymsAndClubs,
  HealthCare,
  HealthyFood,
  Shop,
  Competitions,
];
const separateLinks = [
  GYMSANDCLUBS,
  HEALTHCARE,
  HEALTHYFOOD,
  SPORTSHOPS,
  COMPETITIONS,
];

const BaseCategories = () => {
  const location = useLocation();
  const uri = location.pathname.slice(BASE_CATEGORIES.length);
  const indexLink = separateLinks.findIndex((i) => uri.includes(i));

  return indexLink >= 0 ? (
    createElement(components[indexLink])
  ) : uri.includes("all") ? (
    <AllCategories />
  ) : uri.includes("id") ? (
    <BCFDetail />
  ) : (
    <Federations />
  );
};

export default BaseCategories;
