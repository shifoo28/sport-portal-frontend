import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";

type CardData = {
  cardMaxWidth: number;
  cardHeight: number;
  title: string;
  date: string;
  category: string;
};

const BigCard: React.FC<CardData> = ({
  cardHeight,
  cardMaxWidth,
  category,
  date,
  title,
}) => {
  return (
    <Card
      shadow={false}
      className={`w-full h-[${cardHeight}] max-w-[${cardMaxWidth}] items-end justify-center `}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={`absolute inset-0 m-0 rounded-none h-full w-full 
                    bg-[url('http://localhost:3000/images/news_1.png')] bg-cover bg-center`}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        <div className="absolute top-6 left-6 h-6 bg-[#08F] w-max text-white text-[9px] flex items-center">
          <p className="px-1">{category}</p>
        </div>
      </CardHeader>
      <CardBody className="absolute text-white bottom-7 left-0 w-full max-w-[456px] cursor-pointer">
        <Typography className="leading-[1.5] font-sofiasans text-xs pl-4 max-w-[131px]">
          {date}
        </Typography>
        <Typography className="font-oswald text-[26px] pl-4 mr-20">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default BigCard;
