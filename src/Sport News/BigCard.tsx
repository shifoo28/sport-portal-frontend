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

const BigCard: React.FC<CardData> = ({
  cardHeight,
  cardMaxWidth,
  category,
  date,
  title,
  imgLink,
  cardSize,
}) => {
  let textSize = 20;
  let titleMaxWidth = 300;
  let bottom = 'bottom-5';

  switch (cardSize) {
    case "max":
      {
        textSize = 26;
        titleMaxWidth = 356;
        bottom = 'bottom-7';
      }
      break;
    case "mid":
      {
        textSize = 24;
        titleMaxWidth = 356;
        bottom = 'bottom-6';
      }
      break;
    case "min":
      {
        textSize = 14;
        titleMaxWidth = 200;
        bottom = 'bottom-2';
      }
      break;
    default:
      break;
  }

  return (
    <figure
      className={`relative h-[${cardHeight}px] max-w-[${cardMaxWidth}px] w-full`}
    >
      <img
        className="h-full w-full object-cover object-center group-hover:rotate-3 group-hover:scale-125 transition-transform"
        src={imgLink}
        alt="nature image"
      />
      <div className="absolute inset-0 m-0 bg-gradient-to-t from-black/60 via-black/50 " />
      <div className="absolute top-6 left-6 h-6 bg-[#08F] w-max text-white text-[9px] flex items-center">
        <p className="px-3">{category}</p>
      </div>
      <figcaption
        className={`absolute text-white ${bottom} left-0 w-full max-w-[${titleMaxWidth}px] cursor-pointer ml-4`}
      >
        <Typography className="leading-[1.5] font-sofiasans text-xs max-w-[131px]">
          {date}
        </Typography>
        <Typography className={`font-oswald text-[${textSize}px] capitalize`}>
          {title}
        </Typography>
      </figcaption>
    </figure>
  );
};

export default BigCard;
