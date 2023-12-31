import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { urlBack } from "../../../redux/apiCalls";
import { ILocalNews, IWorldNews } from "../../../redux/interfaces/home";

interface Props {
  data: ILocalNews[] | IWorldNews[];
  linkToNewsDetail: (newsId: string, categoryId: string) => void;
}

const FilterNews = ({ data, linkToNewsDetail }: Props) => {
  // useSelector
  const prefLang = useSelector((state: any) => state.main.prefLang);

  // useState
  const [activeTab, setActiveTab] = useState(false);
  const [news, setNews] = useState(data);

  // Hooks
  useEffect(() => {
    setNews(data?.reverse());
  }, [data, activeTab]);

  // Function
  const changeTab = (activate: boolean) => {
    setActiveTab(activate);
  };

  return (
    <div className="w-[270px] min-w-[270px]">
      <div className="flex justify-between h-11 font-oswald cursor-pointer">
        <div
          className={`flex items-center border-b text-sm w-full ${
            !activeTab
              ? "border-red-600 text-red-600"
              : "border-black w-full text-black"
          }`}
          onClick={() => changeTab(false)}
        >
          {prefLang === "Tm" ? "Täzeler" : "Новые"}
        </div>
        <div
          className={`flex items-center justify-end text-sm border-b w-full ${
            activeTab
              ? "border-red-600 text-red-600"
              : "border-black w-full text-black"
          }`}
          onClick={() => changeTab(true)}
        >
          {prefLang === "Tm" ? "Köp okalanlar" : "Самые читаемые"}
        </div>
      </div>
      <div className="pt-5">
        {news?.slice(0, 8).map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center pb-4 cursor-pointer"
              onClick={() => linkToNewsDetail(item.id, item.categoryId)}
            >
              <div className="h-[70px] w-[70px] relative">
                <img
                  src={urlBack + item.imagePath}
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-around max-w-[185px] w-full">
                <p className="font-sofiasans text-[8px]">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
                <p className="font-oswald text-[14px] leading-4">
                  {prefLang === "Tm" ? item.nameTm : item.nameRu}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterNews;
