import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SPORT_NEWS_ALL } from "../../tools/links";
import { useDispatch, useSelector } from "react-redux";
import { urlBack } from "../../redux/apiCalls";
import { PATCH_SPORT_NEWS_VIEWS } from "../../redux/types";
import { RootState } from "../../redux/store";
import { INews } from "../../redux/interfaces/home";

const NewsDetail = () => {
  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const local_news: INews[] = useSelector(
    (state: RootState) => state.home.local_news
  );

  // Operation
  const news_data: INews =
    state.newsId && local_news.find((ln) => ln.id === state.newsId);
  const same_news = local_news.filter(
    (ln) => ln.categoryId === news_data.categoryId
  );

  useEffect(() => {
    dispatch({
      type: PATCH_SPORT_NEWS_VIEWS,
      payload: { newsId: state.newsId, categoryId: news_data?.categoryId },
    });
  }, [prefLang]);

  return (
    <div className="flex flex-col items-center justify-between gap-5 w-full">
      <div className="flex items-center">
        <p className="text-[26px] font-oswald capitalize max-w-[570px] text-center text-[#0F1A42]">
          {prefLang === "Tm" ? news_data?.nameTm : news_data?.nameRu}
        </p>
      </div>
      <div className="">
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
            {news_data?.views}
          </p>
          <p>
            {prefLang === "Tm" ? news_data?.locationTm : news_data?.locationRu}
          </p>
        </div>
        <div>
          <img
            src={urlBack + news_data?.imagePath}
            className="object-cover max-w-[700px] object-center"
          />
        </div>
      </div>
      <p className="w-full h-max text-justify font-sofiasans text-base whitespace-pre-line">
        {prefLang === "Tm" ? news_data?.textTm : news_data?.textRu}
      </p>
      <div className="flex flex-col w-full pt-20">
        <div className="flex justify-between w-full font-oswald h-max">
          <p className="border-b border-[#F65050] text-[#F65050] text-2xl w-[200px]">
            {prefLang === "Tm" ? "Meňzeş täzelikler" : "Подобные новости"}
          </p>
          <div className="border-b border-black flex justify-end w-full">
            <button
              className="text-base bg-[#077EE6] text-white h-11 w-36"
              onClick={() => {
                navigate(SPORT_NEWS_ALL, {
                  state: { sportCategoryId: news_data?.categoryId },
                });
              }}
            >
              {prefLang === "Tm" ? "Hemmesini görmek" : "Посмотреть все"}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between pt-4">
          {same_news.map((sn, index) => {
            return (
              <div className="flex flex-col w-[195px] gap-2" key={index}>
                <img
                  src={urlBack + sn.imagePath}
                  className="object-cover h-[145px]"
                />
                <p className="text-[10px] font-sofiasans">
                  {prefLang === "Tm" ? sn.locationTm : sn.locationRu}
                </p>
                <p className="text-sm font-oswald font-semibol cursor-pointer">
                  {prefLang === "Tm" ? sn.nameTm : sn.nameRu}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
