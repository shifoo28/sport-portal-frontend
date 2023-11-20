import React from "react";
import FootballNewsBody from "../../components/Sections/Global/FootballNewsBody";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ILocalNews } from "../../redux/interfaces/home";
import { useLocation } from "react-router-dom";
import { urlBack } from "../../redux/apiCalls";

const NewsAll = () => {
  // Hooks
  const { state } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const local_news: ILocalNews[] = useSelector(
    (state: RootState) => state.home.local_news
  );

  // Operation
  const news = local_news.filter(
    (ln) => ln.categoryId === state.categoryId
  );

  return (
    <div className="w-full mx-32 max-w-[1170px]">
      <div className="w-full flex justify-between gap-8 pt-8">
        <div className="w-[445px]">
          <div className="flex h-11 font-oswald w-full">
            <div
              className={`flex items-center max-w-[150px] w-full border-b border-[#0088FF] text-[#0088FF] 
                  text-sm`}
            >
              {prefLang == "Tm" ? "Toparlar Statistika" : "Статистика команды"}
            </div>
            <span className="border-b border-black w-full"></span>
          </div>
          <FootballNewsBody />
        </div>
        <div className="w-full">
          <div className="flex h-11 font-oswald text-2xl w-full">
            <div
              className={`flex items-center max-w-[160px] w-full border-b border-[#F65050] text-[#F65050]`}
            >
              {prefLang == "Tm"
                ? news[0]?.category?.nameTm
                : news[0]?.category?.nameRu}
            </div>
            <span className="border-b border-black w-full"></span>
          </div>
          <div className="grid grid-cols-4 w-full pt-5 gap-4">
            {news?.map((item, index) => {
              return (
                <div
                  className="flex flex-col gap-1 cursor-pointer hover:underline"
                  key={index}
                >
                  <img
                    src={urlBack + item.imagePath}
                    className="w-[195px] h-[145px] object-cover"
                  />
                  <p className="text-[10px] font-sofiasans">
                    {prefLang === "Tm" ? item.locationTm : item.locationRu}
                  </p>
                  <p className="text-sm font-oswald">
                    {prefLang === "Tm" ? item.nameTm : item.nameRu}
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

export default NewsAll;
