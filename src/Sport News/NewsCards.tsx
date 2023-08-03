import React from "react";
import SingleCard from "./SingleCard";

const news = [
  {
    imgLink: "http://localhost:3000/images/news_1.png",
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
    <div className="w-full mx-32 pt-9 max-w-[1170px]">
      <section className="flex justify-between">
        <SingleCard imgLink={""} cardMaxWidth={0} cardHeight={0} title={""} date={""} category={""} />
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default NewsCards;
