import React from "react";
import { useLocation } from "react-router-dom";
import { BASE_CATEGORIES } from "../../tools/links";
import AllBaseCategories from "./AllBaseCategories";
import Federations from "./Federations";
import FederationAll from "./FederationAll";
import { useDispatch } from "react-redux";
import { GET_FEDERATIONS } from "../../redux/types";

const BaseCategories = () => {
  const dispatch = useDispatch();
  dispatch({ type: GET_FEDERATIONS });
  const location = useLocation();
  const uri = location.pathname.slice(BASE_CATEGORIES.length);

  return uri.includes("all") ? (
    <FederationAll uri={uri} />
  ) : uri.length < 2 ? (
    <AllBaseCategories />
  ) : (
    <Federations pathname={uri} />
  );
};

export default BaseCategories;
