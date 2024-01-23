import React from "react";
import { HeaderWithCategories, HeaderWithoutCategories } from "./Headers";
import WorldNewsBody from "./Body";
import FootballNewsBody from "./Championships";

const index = () => {
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

export default index;
