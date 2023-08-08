import React from "react";
import NewsCard from "./NewsCard";
import AdsCard from "./AdsCard";

const news = [
  {
    imgLink: "http://localhost:3000/images/news/news_1.png",
    cardMaxWidth: 456,
    cardHeight: 579,
    title:
      "Türkmenistanly agyr atletikaçylar Aziýa çempionatynda dört medala mynasyp boldular",
    date: "Koreýa Respublikasy - 08 Maý 2023ý.",
    category: "Agyr atletika",
    cardSize: "max",
  },
  {
    imgLink: "http://localhost:3000/images/news/news_2.png",
    cardMaxWidth: 234,
    cardHeight: 278,
    title:
      "Türkmenistanly pälwanlar guşakly göreş boýunça Aziýanyň çempionatyna gatnaşarlar",
    date: "Özbegistan - 05 Maý 2023ý.",
    category: "Göreş",
    cardSize: "min",
  },
  {
    imgLink: "http://localhost:3000/images/news/news_3.png",
    cardMaxWidth: 234,
    cardHeight: 278,
    title: "Paralimpiýa oýunlaryna türkmenistanly türgenleriň taýynlygy",
    date: "BAE - 20 Maý 2023ý.",
    category: "Pawerlifting",
    cardSize: "min",
  },
  {
    imgLink: "http://localhost:3000/images/news/news_4.png",
    cardMaxWidth: 484,
    cardHeight: 278,
    title:
      "Ruslan Mingazow Gonkongyň futbol çempionatynyň iň gowy oýunçysy boldy",
    date: "Gonkong - 23 Maý 2023ý.",
    category: "Futbol",
    cardSize: "mid",
  },
];
const ads = [
  {
    imgLink: "http://localhost:3000/images/ads/ads_1.png",
    title: "Alem Sport magazin",
  },
  {
    imgLink: "http://localhost:3000/images/ads/ads_2.png",
    title: "Фирменный магазин 'Nike'",
  },
  {
    imgLink: "http://localhost:3000/images/ads/ads_3.png",
    title: "Hattrick Store",
  },
  {
    imgLink: "http://localhost:3000/images/ads/ads_4.png",
    title: "Lotto Sport magazin",
  },
];

const NewsCards = () => {
  return (
    <div className="w-full flex mt-9 mx-32 h-max max-w-[1170px]">
      <div className="flex justify-between w-full ">
        <div className="w-[440px] h-[570px]">
          <NewsCard
            imgLink={news[0].imgLink}
            cardMaxWidth={news[0].cardMaxWidth}
            cardHeight={news[0].cardHeight}
            title={news[0].title}
            date={news[0].date}
            category={news[0].category}
            cardSize={news[0].cardSize}
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="w-[231px] max-h-[275px]">
              <NewsCard
                imgLink={news[1].imgLink}
                cardMaxWidth={news[1].cardMaxWidth}
                cardHeight={news[1].cardHeight}
                title={news[1].title}
                date={news[1].date}
                category={news[1].category}
                cardSize={news[1].cardSize}
              />
            </div>
            <div className="w-[231px] max-h-[275px]">
              <NewsCard
                imgLink={news[2].imgLink}
                cardMaxWidth={news[2].cardMaxWidth}
                cardHeight={news[2].cardHeight}
                title={news[2].title}
                date={news[2].date}
                category={news[2].category}
                cardSize={news[2].cardSize}
              />
            </div>
          </div>
          <div className="max-w-[484px] max-h-[278px]">
            <NewsCard
              imgLink={news[3].imgLink}
              cardMaxWidth={news[3].cardMaxWidth}
              cardHeight={news[3].cardHeight}
              title={news[3].title}
              date={news[3].date}
              category={news[3].category}
              cardSize={news[3].cardSize}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-[210px]">
            <AdsCard imgLink={ads[0].imgLink} title={ads[0].title} />
          </div>
          <div className="w-[210px]">
            <AdsCard imgLink={ads[1].imgLink} title={ads[1].title} />
          </div>
          <div className="w-[210px]">
            <AdsCard imgLink={ads[2].imgLink} title={ads[2].title} />
          </div>
          <div className="w-[210px]">
            <AdsCard imgLink={ads[3].imgLink} title={ads[3].title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
