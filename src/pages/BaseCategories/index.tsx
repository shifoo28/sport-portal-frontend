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
import AllBaseCategories from "./AllBaseCategories";
import Federations from "./Federations";
import FederationAll from "./FederationAll";
import { useDispatch } from "react-redux";
import { GET_FEDERATIONS } from "../../redux/types";
import BCFDetail from "../../components/Details/BCFDetail";
import GymsAndClubs from "../../components/BCFederations/GymsandClubs";
import HealthCare from "../../components/BCFederations/HealthCare";
import HealthyFood from "../../components/BCFederations/HealthyFood";
import SportShops from "../../components/BCFederations/SportShops";
import Competitions from "../../components/BCFederations/Competitions";

const components = [
  GymsAndClubs,
  HealthCare,
  HealthyFood,
  SportShops,
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
  const dispatch = useDispatch();
  dispatch({ type: GET_FEDERATIONS });
  const location = useLocation();
  const uri = location.pathname.slice(BASE_CATEGORIES.length);
  const indexLink = separateLinks.findIndex((i) => uri.includes(i));

  return indexLink >= 0 ? (
    createElement(components[indexLink])
  ) : uri.includes("all") ? (
    <FederationAll />
  ) : uri.includes("id") ? (
    <BCFDetail />
  ) : uri.length < 2 ? (
    <AllBaseCategories />
  ) : (
    <Federations />
  );
};

export default BaseCategories;
