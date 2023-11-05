import React from "react";
import FilterNews from "../../components/Sections/Videos/FilterNews";
import NewsDetail from "../../components/Details/NewsDetail";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { INews } from "../../redux/interfaces/home";

const NewsDetails = () => {
  const local_news: INews[] = useSelector(
    (state: RootState) => state.home.local_news
  );

  return (
    <div className="flex justify-between max-w-[1170px] mx-32">
      <div className="flex w-full pt-7 gap-12">
        <FilterNews data={local_news} />
        <NewsDetail />
      </div>
    </div>
  );
};

export default NewsDetails;
