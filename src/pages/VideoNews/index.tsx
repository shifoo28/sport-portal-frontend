import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../redux/store";
import { IVideoNews } from "../../redux/interfaces/home";

const VideoNewsAll = () => {
  // Hooks
  const { state } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const video_news_all: IVideoNews[] = useSelector(
    (state: RootState) => state.home.video_news
  );

  // Operation
  const videos = video_news_all.filter(
    (vna) => vna.categoryId === state.categoryId
  );

  return (
    <div className="mx-32 max-w-[1170px] flex flex-col pt-7 w-full">
      <div className="flex">
        <p className="border-b border-[#077EE6] text-[#077EE6] w-full max-w-xs font-oswald text-2xl">
          {prefLang === "Tm"
            ? videos[0]?.category.nameTm
            : videos[0]?.category.nameRu}
        </p>
        <p className="w-full border-b border-black"></p>
      </div>
      <div className="flex flex-wrap gap-5 pt-3">
        {videos?.map((video, index) => {
          return <div key={index}>{video.categoryId}</div>;
        })}
      </div>
    </div>
  );
};

export default VideoNewsAll;
