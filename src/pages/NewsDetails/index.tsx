import React from "react";
import FilterNews from "../../components/Video News/FilterNews";
import Detail from "../../components/Details/Detail";

const NewsDetails = ({}) => {
  return (
    <div className="flex justify-between max-w-[1170px] mx-32">
      <div className="flex w-full pt-7 gap-12">
        <FilterNews />
        <Detail />
      </div>
    </div>
  );
};

export default NewsDetails;
