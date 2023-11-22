import React from "react";
import { HeaderWithCategories, HeaderWithoutCategories } from "./Headers";
import WorldNewsBody from "./Body";
import FootballNewsBody from "./FootballNewsBody";

const index = () => {  
  return (
    <div className="flex w-full mt-7 h-max max-w-[1170px] mx-32">
      <div className="flex justify-between w-full">
        <div className="max-w-[870px] flex flex-col w-full">
          <HeaderWithCategories />
          <WorldNewsBody />
        </div>
        <div className="flex flex-col max-w-[270px] w-full">
          <HeaderWithoutCategories />
          <FootballNewsBody />
        </div>
      </div>
    </div>
  );
};

export default index;
