import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";

type CardData = {
  imgLink: string;
  cardMaxWidth: number;
  cardHeight: number;
  title: string;
  date: string;
  category: string;
};

const SingleCard: React.FC<CardData> = (news) => {
  news;
  return (
    <Card
      shadow={false}
      className="relative w-full h-[570px] max-w-[456px] items-end justify-center overflow-hidden"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full bg-[url('http://localhost:3000/images/news_1.png')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        <div className="absolute top-6 left-6 h-6 bg-[#08F] w-max text-white text-[9px] flex items-center">
          <p className="px-1">Agyr atletika</p>
        </div>
      </CardHeader>
      <CardBody className="absolute text-white bottom-7 left-0 w-full max-w-[456px] cursor-pointer">
        <Typography className="leading-[1.5] font-sofiasans text-xs pl-4 max-w-[131px]">
          Koreýa Respublikasy - 08 Maý 2023ý.
        </Typography>
        <Typography className="font-oswald text-[26px] pl-4 mr-20">
          Türkmenistanly agyr atletikaçylar Aziýa çempionatynda dört medala
          mynasyp boldular
        </Typography>
      </CardBody>
    </Card>
  );
};

export default SingleCard;
