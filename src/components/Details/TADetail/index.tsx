import React from "react";
import { useLocation } from "react-router-dom";
import { TRAINERS } from "../../../tools/links";
import TrainerDetail from "../TrainerDetail";
import AthleteDetail from "./AthleteDetail";

const BCFDetail = () => {
  const { pathname } = useLocation();

  return pathname.includes(TRAINERS) ? <TrainerDetail /> : <AthleteDetail />;
};

export default BCFDetail;
