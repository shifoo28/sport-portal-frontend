import React from "react";
import BigCard from "./BigCard";
import MinCard from "./MinCard";

const news = [
  {
    imgLink: "http://localhost:3000/images/news/news_1.png",
    cardMaxWidth: 456,
    cardHeight: 570,
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
    <div className="w-full h-full pt-9 max-w-[1170px] flex justify-between gap-[15px]">
      <section className="flex justify-between w-full h-full">
        <BigCard
          cardMaxWidth={news[0].cardMaxWidth}
          cardHeight={news[0].cardHeight}
          title={news[0].title}
          date={news[0].date}
          category={news[0].category}
          imgLink={news[0].imgLink}
          cardSize={news[0].cardSize}
        />
      </section>
      <section className="flex flex-col gap-[15px] w-full h-full">
        <div className="flex gap-[15px]">
          <BigCard
            imgLink={news[1].imgLink}
            cardMaxWidth={news[1].cardMaxWidth}
            cardHeight={news[1].cardHeight}
            title={news[1].title}
            date={news[1].date}
            category={news[1].category}
            cardSize={news[1].cardSize}
          />
          <BigCard
            imgLink={news[2].imgLink}
            cardMaxWidth={news[2].cardMaxWidth}
            cardHeight={news[2].cardHeight}
            title={news[2].title}
            date={news[2].date}
            category={news[2].category}
            cardSize={news[2].cardSize}
          />
        </div>
        <BigCard
          imgLink={news[3].imgLink}
          cardMaxWidth={news[3].cardMaxWidth}
          cardHeight={news[3].cardHeight}
          title={news[3].title}
          date={news[3].date}
          category={news[3].category}
          cardSize={news[3].cardSize}
        />
      </section>
      <section className="flex flex-col justify-between ">
        <MinCard imgLink={ads[0].imgLink} title={ads[0].title} />
        <MinCard imgLink={ads[1].imgLink} title={ads[1].title} />
        <MinCard imgLink={ads[2].imgLink} title={ads[2].title} />
        <MinCard imgLink={ads[3].imgLink} title={ads[3].title} />
      </section>
    </div>
  );
};

export default NewsCards;
