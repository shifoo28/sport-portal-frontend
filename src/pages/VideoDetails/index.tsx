import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { urlBack } from "../../redux/apiCalls";
import playvideo from "../../components/Video News/svg/playvideo.svg";

const VideoDetails = () => {
  const location = useLocation();
  const { index } = location.state;
  const newVideo = useSelector((state: any) => state.home.video[index]);
  const prefLang = useSelector((state: any) => state.main.prefLang);

  const now = new Date().getTime();
  const updated = new Date(newVideo.updatedAt).getTime();
  const postedAt = now - updated;
  const uploaded = Math.round(postedAt / 1000 / 60 / 60 / 24)
    ? `${Math.round(postedAt / 1000 / 60 / 60 / 24)} ${
        prefLang === "Tm" ? "gün öň" : "дня(день) назад"
      }`
    : Math.round(postedAt / 1000 / 60 / 60)
    ? `${Math.round(postedAt / 1000 / 60 / 60)} ${
        prefLang === "Tm" ? "sagat öň" : "час(а) назад"
      }`
    : Math.round(postedAt / 1000 / 60)
    ? `${Math.round(postedAt / 1000 / 60)} ${
        prefLang === "Tm" ? "minut öň" : "минут(ы) назад"
      }`
    : `${prefLang === "Tm" ? "1 minut öň" : "1 минуту назад"}`;

  return (
    <div className="flex w-full max-w-[1170px] mx-32 pt-7">
      <div className="flex items-center w-full flex-col text-[#0F1A42]">
        <p className="font-oswald text-[50px] max-w-[90%] text-center">
          {prefLang === "Tm" ? newVideo.nameTm : newVideo.nameRu}
        </p>
        <div className="w-full">
          <div className="flex w-full justify-between">
            <p className="font-sofiasans text-base flex justify-center items-center gap-2">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                <path
                  d="M13.2931 8.61587C13.2931 10.437 11.8214 11.9087 10.0003 11.9087C8.17912 11.9087 6.70752 10.437 6.70752 8.61587C6.70752 6.79472 8.17912 5.32312 10.0003 5.32312C11.8214 5.32312 13.2931 6.79472 13.2931 8.61587Z"
                  stroke="#0088FF"
                  stroke-opacity="0.4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 16.2223C13.2468 16.2223 16.2729 14.3092 18.3792 10.998C19.2069 9.70109 19.2069 7.52122 18.3792 6.22432C16.2729 2.91313 13.2468 1 10 1C6.75319 1 3.72713 2.91313 1.62085 6.22432C0.793051 7.52122 0.793051 9.70109 1.62085 10.998C3.72713 14.3092 6.75319 16.2223 10 16.2223Z"
                  stroke="#0088FF"
                  stroke-opacity="0.4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {newVideo.views}
            </p>
            <p className="font-sofiasans text-base">{uploaded}</p>
          </div>
          <video
            src={urlBack + "/" + newVideo.videoPath}
            width={"100%"}
            controls
            autoPlay
          >
            Your browser doesn't support this video!
          </video>
        </div>
        <div className="w-full pt-24 flex flex-col gap-8">
          <div className="flex justify-between font-oswald">
            <div className="border-b border-[#F65050] w-52">
              <p className="text-2xl text-[#F65050] my-1">
                {prefLang === "Tm" ? "Meňzeş täzelikler" : "Подобные новости"}
              </p>
            </div>
            <div className="w-full border-b border-black flex justify-end">
              <button className="text-sm bg-[#077EE6] text-white h-full px-3">
                {prefLang === "Tm" ? "Hemmesini görmek" : "Посмотреть все"}
              </button>
            </div>
          </div>
          <div className="flex justify-between font-oswald text-2xl">
            <div className="flex flex-col justify-between cursor-pointer">
              <div className="h-[400px] w-[660px] relative">
                <img
                  src={playvideo}
                  className="absolute top-[160px] left-[300px]"
                />
                <img
                  src="/images/video_news/news_1.png"
                  className="object-cover h-full"
                />
              </div>
              <p className="text-xs font-sofiasans">Floyd Miles 3 Days Ago</p>
              <p className="font-semibold max-w-[550px]">
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex h-[165px] gap-4">
                <div className="relative w-[182px] h-full">
                  <img
                    src={playvideo}
                    className="absolute w-[38px] h-[38px] top-[40%] left-[40%]"
                  />
                  <img
                    src="/images/video_news/news_2.png"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <p className="text-xs font-sofiasans">
                    Jacob Jones 3 Days Ago
                  </p>
                  <p className="max-w-[290px] font-semibold">
                    Tiny moon rover could be a stepping stone to Mars
                  </p>
                </div>
              </div>
              <div className="flex h-[165px] gap-4">
                <div className="relative w-[182px] h-full">
                  <img
                    src={playvideo}
                    className="absolute w-[38px] h-[38px] top-[40%] left-[40%]"
                  />
                  <img
                    src="/images/video_news/news_3.png"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <p className="text-xs font-sofiasans">
                    Jacob Jones 3 Days Ago
                  </p>
                  <p className="max-w-[290px] font-semibold">
                    Tiny moon rover could be a stepping stone to Mars
                  </p>
                </div>
              </div>
              <div className="flex h-[165px] gap-4">
                <div className="relative w-[182px] h-full">
                  <img
                    src={playvideo}
                    className="absolute w-[38px] h-[38px] top-[40%] left-[40%]"
                  />
                  <img
                    src="/images/video_news/news_4.png"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <p className="text-xs font-sofiasans">
                    Jacob Jones 3 Days Ago
                  </p>
                  <p className="max-w-[290px] font-semibold">
                    Tiny moon rover could be a stepping stone to Mars
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
