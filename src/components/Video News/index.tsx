import React from "react";
import { HeaderWithCategories } from "./Headers";
import SportNewsBody from "./SportNewsBody";
import AllNewsBody from "./AllNewsBody";

const index = () => {
  return (
    <div className="flex w-full mt-7 h-max max-w-[1170px] mx-32">
      <div className="flex w-full justify-between">
        <div className="flex flex-col max-w-[870px] w-full">
          <HeaderWithCategories />
          <SportNewsBody />
        </div>
        <div className="flex flex-col max-w-[270px] w-full">
          <AllNewsBody />
        </div>
      </div>
    </div>
  );
};

export default index;
