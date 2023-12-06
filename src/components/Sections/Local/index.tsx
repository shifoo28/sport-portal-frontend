import React from "react";
import NewsCard from "./NewsCard";
import AdsCard from "./AdsCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ads = [
  {
    id: 0,
    imgLink: `${process.env.ADDRESS}images/ads/ads_1.png`,
    title: "Alem Sport magazin",
  },
  {
    id: 1,
    imgLink: `${process.env.ADDRESS}images/ads/ads_2.png`,
    title: "Фирменный магазин 'Nike'",
  },
  {
    id: 2,
    imgLink: `${process.env.ADDRESS}images/ads/ads_3.png`,
    title: "Hattrick Store",
  },
  {
    id: 3,
    imgLink: `${process.env.ADDRESS}images/ads/ads_4.png`,
    title: "Lotto Sport magazin",
  },
];

const NewsCards = () => {
  const news = useSelector((state: RootState) => state.home.local_news);
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  return (
    <div className="w-full flex mt-9 mx-32 h-max max-w-[1170px]">
      <div className="flex justify-between w-full ">
        <div className="w-[440px] h-[570px]">
          <NewsCard
            id={news[0]?.id}
            imgLink={news[0]?.imagePath}
            title={prefLang === "Tm" ? news[0]?.nameTm : news[0]?.nameRu}
            date={news[0]?.location}
            category={
              prefLang === "Tm"
                ? news[0]?.category.nameTm
                : news[0]?.category.nameRu
            }
            cardSize="max"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="w-[231px] h-[275px]">
              <NewsCard
                id={news[1]?.id}
                imgLink={news[1]?.imagePath}
                title={prefLang === "Tm" ? news[1]?.nameTm : news[1]?.nameRu}
                date={news[1]?.location}
                category={
                  prefLang === "Tm"
                    ? news[1]?.category.nameTm
                    : news[1]?.category.nameRu
                }
                cardSize="min"
              />
            </div>
            <div className="w-[231px] h-[275px]">
              <NewsCard
                id={news[2]?.id}
                imgLink={news[2]?.imagePath}
                title={prefLang === "Tm" ? news[2]?.nameTm : news[2]?.nameRu}
                date={news[2]?.location}
                category={
                  prefLang === "Tm"
                    ? news[2]?.category.nameTm
                    : news[2]?.category.nameRu
                }
                cardSize="min"
              />
            </div>
          </div>
          <div className="w-[484px] h-[278px]">
            <NewsCard
              id={news[3]?.id}
              imgLink={news[3]?.imagePath}
              title={prefLang === "Tm" ? news[3]?.nameTm : news[3]?.nameRu}
              date={news[3]?.location}
              category={
                prefLang === "Tm"
                  ? news[3]?.category.nameTm
                  : news[3]?.category.nameRu
              }
              cardSize="mid"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-[210px]">
            <AdsCard imgLink={ads[0]?.imgLink} title={ads[0]?.title} />
          </div>
          <div className="w-[210px]">
            <AdsCard imgLink={ads[1]?.imgLink} title={ads[1]?.title} />
          </div>
          <div className="w-[210px]">
            <AdsCard imgLink={ads[2]?.imgLink} title={ads[2]?.title} />
          </div>
          <div className="w-[210px]">
            <AdsCard imgLink={ads[3]?.imgLink} title={ads[3]?.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
