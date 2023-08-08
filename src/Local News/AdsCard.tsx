import { Typography } from "@material-tailwind/react";
import React, { FC } from "react";

type Props = {
  imgLink: string;
  title: string;
};

const AdsCard: FC<Props> = ({ imgLink, title }) => {
  return (
    <figure className={`relative`}>
      <img
        className="h-full w-full  object-cover object-center"
        src={imgLink}
        alt="nature image"
      />
      <div className="absolute inset-0 m-0 bg-gradient-to-t from-black/60 via-black/50 " />
      <figcaption className="absolute text-white bottom-4 left-0 w-full max-w-[356px] cursor-pointer ml-2">
        <Typography className="font-sofiasans text-[10px] max-w-[110px]">
          {title}
        </Typography>
      </figcaption>
    </figure>
  );
};

export default AdsCard;
