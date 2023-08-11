import { Typography } from "@material-tailwind/react";
import React from "react";

type CardData = {
  imgLink: string;
  cardMaxWidth: number;
  cardHeight: number;
  title: string;
  date: string;
  category: string;
  cardSize: string;
};

const NewsCard: React.FC<CardData> = ({
  category,
  date,
  title,
  imgLink,
  cardSize,
}) => {
  let textSize = "text-xl",
    titleMaxWidth = "max-w-[300px]",
    bottom = "bottom-5";

  switch (cardSize) {
    case "max":
      {
        textSize = "text-2xl";
        titleMaxWidth = "max-w-[340px]";
        bottom = "bottom-7";
      }
      break;
    case "mid":
      {
        textSize = "text-xl";
        titleMaxWidth = "max-w-[300px]";
        bottom = "bottom-6";
      }
      break;
    case "min":
      {
        textSize = "text-sm";
        titleMaxWidth = "max-w-[195px]";
        bottom = "bottom-2";
      }
      break;
    default:
      break;
  }

  return (
    <figure className={`relative w-full h-full m-0`}>
      <img
        className={`h-full w-full object-cover object-center transition hover:duration-300  ease-in-out`}
        src={imgLink}
        alt="nature image"
      />
      <div className="absolute inset-0 m-0 bg-gradient-to-t from-black/60 via-black/50 " />
      <div className="absolute top-6 left-6 h-5 bg-[#08F] w-max text-white text-[9px] flex items-center">
        <p className="px-3">{category}</p>
      </div>
      <figcaption
        className={`absolute text-white ${
          bottom + " " + titleMaxWidth
        } left-0 w-full cursor-pointer ml-4`}
      >
        <Typography className="font-sofiasans text-[10px] max-w-[131px]">
          {date}
        </Typography>
        <Typography className={`font-oswald capitalize ${textSize}`}>
          {title}
        </Typography>
      </figcaption>
    </figure>
  );
};

export default NewsCard;
