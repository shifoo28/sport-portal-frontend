import React from "react";
import playVideoSvg from "./svg/playvideo.svg";
import { useNavigate } from "react-router-dom";
import { VIDEO_DETAILS_PAGE } from "../../../tools/links";
import { useSelector } from "react-redux";
import { urlBack } from "../../../redux/apiCalls";
import { RootState } from "../../../redux/store";
import { IVideoNews } from "../../../redux/interfaces/home";
import { BG_COLORS } from "../../../tools/constants";

const Body = () => {
  // Hooks
  const navigate = useNavigate();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const videos: IVideoNews[] = useSelector(
    (state: RootState) => state.home.video_news
  );

  // Operation
  const [video_main, ...videos_other] = videos;

  // Function
  const linkToVideoDetail = (videoId: string) => {
    navigate(VIDEO_DETAILS_PAGE, { state: { videoId } });
  };

  return (
    <div className="flex pt-5 flex-col">
      <div
        className="relative h-[400px] w-full font-sofiasans cursor-pointer"
        onClick={() => linkToVideoDetail(video_main.id)}
      >
        <img
          src={urlBack + video_main?.imagePath}
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 m-0 bg-gradient-to-t from-black/60 to-black/50" />
        <div className="absolute top-6 left-6 h-5 bg-[#FE4A51] w-max text-white text-[9px] flex items-center">
          <p className="px-3">
            {prefLang === "Tm"
              ? video_main?.category?.nameTm
              : video_main?.category?.nameRu}
          </p>
        </div>
        <div className="absolute top-1/3 left-1/2">
          <img src={playVideoSvg} alt=""/>
        </div>
        <div
          className={`absolute text-white bottom-6 max-w-[60%] left-0 w-full ml-6`}
        >
          <p className="font-sofiasans text-[10px] max-w-[131px]">
            {new Date(video_main?.updatedAt).toLocaleDateString()}
          </p>
          <p className={`font-oswald text-4xl`}>
            {prefLang === "Tm" ? video_main?.nameTm : video_main?.nameRu}
          </p>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex justify-between">
          {videos_other.slice(0, 3).map((video, index) => {
            return (
              <div
                className="flex flex-col max-w-[270px] w-full cursor-pointer"
                key={index}
                onClick={() => linkToVideoDetail(video.id)}
              >
                <div className="relative h-[200px]">
                  <img
                    src={urlBack + video.imagePath}
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute inset-0 m-0 bg-gradient-to-t from-black/60 to-black/50 " />
                  <div className="absolute top-1/2 left-1/2 h-[38px] w-[38px] ">
                    <img
                      src={playVideoSvg}
                      className="-translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div
                    className={`absolute top-6 left-6 h-5 ${
                      BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)]
                    } w-max text-white text-[9px] flex items-center`}
                  >
                    <p className="px-3">
                      {prefLang === "Tm"
                        ? video?.category?.nameTm
                        : video?.category?.nameRu}
                    </p>
                  </div>
                </div>
                <p className="pt-6 font-sofiasans text-[10px]">
                  {new Date(video?.updatedAt).toLocaleDateString()}
                </p>
                <p className="pt-1 font-oswald text-sm font-semibold">
                  {prefLang === "Tm" ? video.nameTm : video.nameRu}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
