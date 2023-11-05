import React from "react";
import { HeaderWithCategories } from "./Headers";
import SportNewsBody from "./SportNewsBody";
import FilterNews from "./FilterNews";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Videos = () => {
  const videos_other = useSelector((state: RootState) => state.home.video_news);

  return (
    <div className="flex w-full mt-7 h-max max-w-[1170px] mx-32">
      <div className="flex w-full justify-between">
        <div className="flex flex-col max-w-[870px] w-full">
          <HeaderWithCategories />
          <SportNewsBody />
        </div>
        <div className="flex flex-col max-w-[270px] w-full">
          <FilterNews data={videos_other} />
        </div>
      </div>
    </div>
  );
};

export default Videos;
