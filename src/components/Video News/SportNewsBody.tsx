import React from "react";
import playVideoSvg from "./svg/playvideo.svg";
import { useNavigate } from "react-router-dom";
import { VIDEO_DETAILS_PAGE } from "../../tools/links";

const videoNews = [
  {
    id: 0,
    imgLink: "/images/video_news/news_2.png",
    date: "Aşgabat - 15 Iyun 2023",
    title:
      "В Туркменистане стартует отбор на чемпионат мира по киберспорту IeSF по Dota 2",
    category: "Esport",
    color: "bg-[#49CFE8]",
  },
  {
    id: 1,
    imgLink: "/images/video_news/news_3.png",
    date: "Almata - 23 Iyul 2023",
    title:
      "Алматы примет юниорский турнир по настольному теннису с участием сборной Туркменистана",
    category: "Tennis",
    color: "bg-[#26387A]",
  },
  {
    id: 2,
    imgLink: "/images/video_news/news_4.png",
    date: "Bişkek - 29 Iyul 2022",
    title:
      "Сборная Туркменистана по волейболу заняла второе место в Кубке вызова Центральной Азии",
    category: "Woleýbol",
    color: "bg-[#FB8282]",
  },
];

const SportNewsBody = () => {
  const navigate = useNavigate();

  const linkTo = () => {
    navigate(VIDEO_DETAILS_PAGE, {
      state: {
        date: "Hong Kong - 11 Iyul 2023",
        title:
          "Интервью с футболистом сборной Туркменистана Русланом Мингазовым",
      },
    });
  };

  return (
    <div className="flex pt-5 flex-col">
      <div
        className="relative h-[400px] w-full font-sofiasans cursor-pointer"
        onClick={linkTo}
      >
        <img src="/images/video_news/news_1.png" />
        <div className="absolute inset-0 m-0 bg-gradient-to-t from-black/60 to-black/50 " />
        <div className="absolute top-6 left-6 h-5 bg-[#FE4A51] w-max text-white text-[9px] flex items-center">
          <p className="px-3">Futbol</p>
        </div>
        <div className="absolute top-24 left-1/2">
          <img src={playVideoSvg} />
        </div>
        <div
          className={`absolute text-white bottom-6 max-w-[60%] left-0 w-full ml-6`}
        >
          <p className="font-sofiasans text-[10px] max-w-[131px]">
            Hong Kong - 11 Iyul 2023
          </p>
          <p className={`font-oswald text-4xl`}>
            Интервью с футболистом сборной Туркменистана Русланом Мингазовым
          </p>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex justify-between">
          {videoNews.map((e) => {
            return (
              <div className="flex flex-col max-w-[270px] w-full cursor-pointer" key={e.id}>
                <div className="relative h-[200px]">
                  <img src={e.imgLink} className="object-cover" />
                  <div className="absolute inset-0 m-0 bg-gradient-to-t from-black/60 to-black/50 " />
                  <div className="absolute top-1/2 left-1/2 h-[38px] w-[38px] ">
                    <img
                      src={playVideoSvg}
                      className="-translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div
                    className={`absolute top-6 left-6 h-5 ${e.color} w-max text-white text-[9px] flex items-center`}
                  >
                    <p className="px-3">{e.category}</p>
                  </div>
                </div>
                <p className="pt-6 font-sofiasans text-[10px]">{e.date}</p>
                <p className="pt-1 font-oswald text-sm font-semibold">
                  {e.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SportNewsBody;
