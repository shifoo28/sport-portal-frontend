import React, { createElement } from "react";
import { useLocation } from "react-router-dom";
import {
  ATHLETE,
  BASE_CATEGORIES,
  COMPETITIONS,
  GYMSANDCLUBS,
  HEALTHCARE,
  HEALTHYFOOD,
  SPORTS,
  SPORTSHOPS,
  TRAINERS,
} from "../../tools/links";
import Federations from "./Federations";
import GymsAndClubs from "../../components/BaseCategories/GymsandClubs";
import HealthCare from "../../components/BaseCategories/HealthCare/HealthCare";
import HealthyFood from "../../components/BaseCategories/HealthyFood";
import Competitions from "../../components/BaseCategories/Competitions";
import Shop from "../../components/BaseCategories/Shop";
import BCFDetail from "../../components/Details/TADetail";

const components = [
  Federations,
  GymsAndClubs,
  HealthCare,
  HealthyFood,
  Shop,
  Competitions,
];
const separateLinks = [
  SPORTS,
  TRAINERS,
  ATHLETE,
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

  return indexLink > 2 ? (
    createElement(components[indexLink-2])
  ) : uri.includes("id") ? (
    <BCFDetail />
  ) : (
    createElement(components[0])
  );
};

export default BaseCategories;
