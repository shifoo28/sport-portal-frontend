import React, { useEffect } from "react";
import { HeaderWithCategories, HeaderWithoutCategories } from "./Headers";
import WorldNewsBody from "./Body";
import FootballNewsBody from "./Championships";
import { useDispatch } from "react-redux";
import { GET_CHAMPIONSHIPS } from "../../../redux/types";

const Global = () => {
  // Hooks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:GET_CHAMPIONSHIPS})
  }, []);

  return (
    <div className="flex justify-between">
      <div className="max-w-[870px] flex flex-col w-full">
        <HeaderWithCategories />
        <WorldNewsBody />
      </div>
      <div className="flex flex-col max-w-[270px] w-full">
        <HeaderWithoutCategories />
        <FootballNewsBody />
      </div>
    </div>
  );
};

export default Global;
