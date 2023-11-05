import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BASE_CATEGORIES, APP_ADDRESS, SPORTS } from "../../tools/links";
import { activateTab } from "../../redux/actions/main";
import { RootState } from "../../redux/store";
import { ICompetition } from "../../redux/interfaces/competitions";
import { urlBack } from "../../redux/apiCalls";

const CompetitionDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state, pathname } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const competitions: ICompetition[] = useSelector(
    (state: RootState) => state.competitions.competitions
  );

  // Functions
  const linkTo = () => {
    navigate(APP_ADDRESS + BASE_CATEGORIES + SPORTS);
    dispatch(activateTab(2));
  };

  // Operations
  const competition = competitions.find((c) => c.id === state.competitionId);
  const same_competitions = competitions.filter(
    (item) => item.typeId === competition?.typeId
  );

  return (
    <div className="mx-32 max-w-[1170px] pt-8 flex gap-12 font-sofiasans">
      <div>
        <Sorted prefLang={prefLang} />
      </div>
      <div className="w-full flex flex-col items-center gap-5">
        <p className="font-oswald text-[26px] text-[#0F1A42] text-center max-w-[700px] capitalize">
          {prefLang === "Tm" ? competition?.nameTm : competition?.nameRu}
        </p>
        <div className="max-w-[700px]">
          <div className="flex justify-between items-center text-xs">
            <p className="flex justify-center items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
              >
                <path
                  d="M9.19529 6.07798C9.19529 7.29208 8.2142 8.27317 7.0001 8.27317C5.786 8.27317 4.80493 7.29208 4.80493 6.07798C4.80493 4.86388 5.786 3.88281 7.0001 3.88281C8.2142 3.88281 9.19529 4.86388 9.19529 6.07798Z"
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
              {competition?.views}
            </p>
            <p>
              {prefLang === "Tm"
                ? competition?.locationTm
                : competition?.locationRu}
              {" - "}
              {new Date(competition?.dateStart || "1").getDay()}
              {"-"}
              {new Date(competition?.dateEnd || "1").getDay()}
              {"/"} {new Date(competition?.dateEnd || "1").getMonth()}
              {"/"} {new Date(competition?.dateEnd || "1").getFullYear()}
              {prefLang === "Tm" ? "ý" : "г"}
            </p>
          </div>
          <img src={urlBack + competition?.imagePath} alt="" />
        </div>
        <p className="text-justify">
          {prefLang === "Tm" ? competition?.textTm : competition?.textRu}
        </p>
        <button
          className="uppercase bg-[#0F1A42] text-white font-sofiasans font-semibold h-11 px-5"
          onClick={linkTo}
        >
          {prefLang === "Tm" ? "GATNAŞMAK ÜÇIN" : "ДЛЯ УЧАСТИЯ"}
        </button>
        <div className="flex flex-col w-full pt-20">
          <div className="flex justify-between w-full font-oswald h-max">
            <p className="border-b border-[#F65050] text-[#F65050] text-2xl w-[300px]">
              {prefLang === "Tm"
                ? "Meňzeş bäsleşikler"
                : "Похожие соревнования"}
            </p>
            <div className="border-b border-black flex justify-end w-full">
              <button className="text-base bg-[#077EE6] text-white h-11 w-36">
                {prefLang === "Tm" ? "Hemmesini görmek" : "Посмотреть все"}
              </button>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            {same_competitions.map((sc, index) => {
              return (
                <div className="flex flex-col w-[195px] gap-2" key={index}>
                  <img
                    src={urlBack + sc.imagePath}
                    className="object-cover h-[145px]"
                  />
                  <p className="text-[10px] font-sofiasans">
                    {prefLang === "Tm" ? sc.locationTm : sc.locationRu}
                  </p>
                  <p className="text-sm font-oswald font-semibol cursor-pointer">
                    {prefLang === "Tm" ? sc.nameTm : sc.nameRu}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Sorted = ({ prefLang }: { prefLang: string }) => {
  let dummyData: any[] = [];
  const [activeTab, setActiveTab] = useState(0);
  const changeTab = (activate: number) => {
    setActiveTab(activate);
    dummyData = dummyData.reverse();
  };

  return (
    <div className="w-[270px] min-w-[270px] mt-20">
      <div className="flex justify-between h-11 font-oswald cursor-pointer">
        <div
          className={`flex items-center border-b text-sm w-full ${
            activeTab === 0
              ? "border-red-600 text-red-600"
              : "border-black w-full text-black"
          }`}
          onClick={() => changeTab(0)}
        >
          {prefLang === "Tm" ? "Bäsleşikler" : "Соревнование"}
        </div>
        <div
          className={`flex items-center justify-center text-sm border-b w-full ${
            activeTab === 1
              ? "border-red-600 text-red-600"
              : "border-black w-full text-black"
          }`}
          onClick={() => changeTab(1)}
        >
          {prefLang === "Tm" ? "Sport çäre" : "Мероприятие"}
        </div>
        <div
          className={`flex items-center justify-end text-sm border-b w-full ${
            activeTab === 2
              ? "border-red-600 text-red-600"
              : "border-black w-full text-black"
          }`}
          onClick={() => changeTab(2)}
        >
          {prefLang === "Tm" ? "Sport okuw" : "Тренировки"}
        </div>
      </div>
      <div className="pt-5">
        {dummyData?.map((e) => {
          return (
            <div
              key={e?.id}
              className="flex justify-between items-center pb-4 cursor-pointer"
            >
              <div className="h-[70px] w-[70px] relative">
                <img
                  src={e?.imgLink}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-around max-w-[185px] w-full">
                <p className="font-sofiasans text-[8px]">{e?.date}</p>
                <p className="font-oswald text-[15px] leading-5">{e?.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompetitionDetail;
