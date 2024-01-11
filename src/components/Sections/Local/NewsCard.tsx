import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NEWS_DETAILS_PAGE } from "../../../tools/links";
import { urlBack } from "../../../redux/apiCalls";
import { ESection } from "../../../redux/interfaces/home";
import { BG_COLORS } from "../../../tools/constants";

type CardData = {
  id: string;
  imgLink: string;
  title: string;
  date: string;
  category: string;
  cardSize: string;
};

const NewsCard: React.FC<CardData> = ({
  id,
  category,
  date,
  title,
  imgLink,
  cardSize,
}) => {
  // Hooks
  const navigate = useNavigate();
  const [scaleImage, setScaleImage] = useState("scale-125");

  // Operation
  let textSize = "text-xl",
    titleMaxWidth = "max-w-[300px]",
    bottom = "bottom-5";
  switch (cardSize) {
    case "max":
      textSize = "text-2xl";
      titleMaxWidth = "max-w-[340px]";
      bottom = "bottom-7";
      break;

    case "mid":
      textSize = "text-xl";
      titleMaxWidth = "max-w-[300px]";
      bottom = "bottom-6";
      break;

    case "min":
      textSize = "text-sm";
      titleMaxWidth = "max-w-[195px]";
      bottom = "bottom-2";
      break;

    default:
      break;
  }

  // Function
  const linkToNewsDetail = (newsId: string) => {
    navigate(NEWS_DETAILS_PAGE, { state: { newsId, section: ESection.Local } });
  };

  return (
    <figure
      className={`relative w-full h-full m-0 cursor-pointer`}
      onClick={() => linkToNewsDetail(id)}
      onMouseEnter={() => setScaleImage("scale-100")}
      onMouseLeave={() => setScaleImage("scale-125")}
    >
      <div className="w-full h-full overflow-hidden">
        <img
          className={`h-full w-full object-cover object-center ${scaleImage} transition duration-300`}
          src={urlBack + imgLink}
          alt=""
        />
      </div>
      <div className="absolute inset-0 m-0 bg-gradient-to-t from-black/60 via-black/50 " />
      <div
        className={`absolute top-6 left-6 h-5 ${
          BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)]
        } w-max text-white text-[9px] flex items-center`}
      >
        <p className="px-3">{category}</p>
      </div>
      <figcaption
        className={`absolute text-white ${
          bottom + " " + titleMaxWidth
        } left-0 w-full ml-4`}
      >
        <p className="font-sofiasans text-[10px] max-w-[131px]">{date}</p>
        <p className={`font-oswald capitalize ${textSize}`}>{title}</p>
      </figcaption>
    </figure>
  );
};

export default NewsCard;
