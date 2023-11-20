import React, { useEffect } from "react";
import FilterNews from "../../components/Sections/Videos/FilterNews";
import NewsDetail from "../../components/Details/NewsDetail";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ESection, ILocalNews, IWorldNews } from "../../redux/interfaces/home";
import { useLocation } from "react-router-dom";
import { PATCH_SPORT_NEWS_VIEWS } from "../../redux/types";

const NewsDetails = () => {
  const { state: r_state } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const news: ILocalNews[] | IWorldNews[] = useSelector((state: RootState) =>
    r_state.section === ESection.Local
      ? state.home.local_news
      : state.home.world_news
  );

  // Hooks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: PATCH_SPORT_NEWS_VIEWS,
      payload: { newsId: r_state.newsId, categoryId: news_data?.categoryId },
    });
  }, [prefLang]);

  // Operation
  const news_data =
    r_state.newsId && news.find((ln) => ln.id === r_state.newsId);
  const same_news = news.filter(
    (ln) => ln.categoryId === news_data.categoryId && ln.id != r_state.newsId
  );

  return (
    <div className="flex justify-between max-w-[1170px] mx-32">
      <div className="flex w-full pt-7 gap-12">
        <FilterNews data={news} />
        <NewsDetail
          news_data={news_data}
          same_news={same_news.slice(0, 4)}
          section={r_state.section}
        />
      </div>
    </div>
  );
};

export default NewsDetails;
