import React from "react";
import SingleCard from "./NewsCards/BigCard";
import BigCard from "./NewsCards/BigCard";

const news = [
  {
    cardMaxWidth: 456,
    cardHeight: 570,
    title:
      "Türkmenistanly agyr atletikaçylar Aziýa çempionatynda dört medala mynasyp boldular",
    date: "Koreýa Respublikasy - 08 Maý 2023ý.",
    category: "Agyr atletika",
  },
];

const NewsCards = () => {
  return (
    <div className="w-full h-full pt-9 max-w-[1170px]">
      <section className="flex justify-between w-full h-full">
        <BigCard
          cardMaxWidth={news[0].cardMaxWidth}
          cardHeight={news[0].cardHeight}
          title={news[0].title}
          date={news[0].date}
          category={news[0].category}
        />
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default NewsCards;
