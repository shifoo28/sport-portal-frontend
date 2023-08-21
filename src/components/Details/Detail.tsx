import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SPORT_NEWS_ALL } from "../../tools/links";
import { useSelector } from "react-redux";
import { urlBack } from "../../redux/apiCalls";

const sameNews = [
  {
    id: 0,
    date: "Tibilisi - 17 Apr 2023",
    title: "Türkmenistanyň agyr atletika ýygyndysy Gruziýada türgenleşýär",
    imgLink: "/images/news/same/exact_1.png",
  },
  {
    id: 1,
    date: "Özbegistan Çirçik - 26 Iyun 2023",
    title:
      "Türkmenistanly ýetginjekler sebit ýaryşyndan 5 medal bilen dolandylar",
    imgLink: "/images/news/same/exact_2.png",
  },
  {
    id: 2,
    date: "Aşgabat - 25 Maý 2023",
    title:
      "Türkmenistanda halkara sport ýaryşlarynyň ýeňijilerine Prezidentiň sowgatlary gowşuryldy",
    imgLink: "/images/news/same/exact_3.png",
  },
  {
    id: 3,
    date: "Albaniýa Durres - 11 Mart 2023",
    title:
      "Türkmenistanyň agyr atletika boýunça ýetginjekler ýygyndylary dünýä çempionatyna gatnaşar",
    imgLink: "/images/news/same/exact_4.png",
  },
];

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prefLang = useSelector((state: any) => state.main.prefLang);
  const { newsId } = location.state;

  const data = useSelector((state: any) =>
    state.home.local.find((e: any) => e.id === newsId)
  );

  return (
    <div className="flex flex-col items-center justify-between gap-5 w-full">
      <div className="flex items-center">
        <p className="text-[26px] font-oswald capitalize max-w-[570px] text-center text-[#0F1A42]">
          {prefLang === "Tm" ? data.nameTm : data.nameRu}
        </p>
      </div>
      <div className="max-w-[700px] max-h-[500px]">
        <div className="flex justify-between font-sofiasans text-xs">
          <p className="flex gap-1">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
              <path
                d="M9.19529 6.07725C9.19529 7.29135 8.2142 8.27244 7.0001 8.27244C5.786 8.27244 4.80493 7.29135 4.80493 6.07725C4.80493 4.86315 5.786 3.88208 7.0001 3.88208C8.2142 3.88208 9.19529 4.86315 9.19529 6.07725Z"
                stroke="#0088FF"
                stroke-opacity="0.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.00001 11.1482C9.16454 11.1482 11.1819 9.87277 12.5861 7.66531C13.138 6.80072 13.138 5.34748 12.5861 4.48288C11.1819 2.27542 9.16454 1 7.00001 1C4.83546 1 2.81809 2.27542 1.4139 4.48288C0.862034 5.34748 0.862034 6.80072 1.4139 7.66531C2.81809 9.87277 4.83546 11.1482 7.00001 11.1482Z"
                stroke="#0088FF"
                stroke-opacity="0.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {data.views}
          </p>
          <p>{data.location}</p>
        </div>
        <div>
          <img
            src={urlBack + data.imagePath}
            className="object-cover"
          />
        </div>
      </div>
      <p className="w-full h-max text-justify font-sofiasans text-base whitespace-pre-line">
        {prefLang === "Tm" ? data.textTm : data.textRu}
      </p>
      <div className="flex flex-col w-full pt-20">
        <div className="flex justify-between w-full font-oswald h-max">
          <p className="border-b border-[#F65050] text-[#F65050] text-2xl w-[200px]">
            Meňzeş täzelikler
          </p>
          <div className="border-b border-black flex justify-end w-full">
            <button
              className="text-base bg-[#077EE6] text-white h-11 w-36"
              onClick={() => {
                navigate(SPORT_NEWS_ALL);
              }}
            >
              Hemmesini görmek
            </button>
          </div>
        </div>
        <div className="flex justify-between pt-4">
          {sameNews.map((e) => {
            return (
              <div className="flex flex-col w-[195px] gap-2">
                <img src={e.imgLink} className="object-cover h-[145px]" />
                <p className="text-[10px] font-sofiasans">{e.date}</p>
                <p className="text-sm font-oswald font-semibol cursor-pointer">
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

export default Detail;
