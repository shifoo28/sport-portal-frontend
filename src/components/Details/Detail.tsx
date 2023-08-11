import React from "react";
import { useLocation } from "react-router-dom";

const defText = `
    Şu günler Koreýa Respublikasynyň Çinju şäherinde Agyr atletika boýunça Aziýa çempionaty geçirilýär. Häzire çenli ýaryşda türkmen türgenleri dört medala eýe çykdylar. Has takygy, 64 kilograma çenli agram derejede ýaryşa gatnaşan Medine Amanowa itekläp götermekde 117 kilogram (kiçi kümüş medal), silterläp götermekde 90 kilogram (kiçi bürünç medal) we iki görnüşiň jemi boýunça 207 kilogram (uly kümüş medal) netije görkezip, Türkmenistanyň ýygyndysynyň hasabyna üç medal goşmagy başardy. Bu agram derejede altyn medallaryň üçüsini (itekläp götermekde 118 kilogram, silterläp götermekde 93 kilogram, iki görnüşiň jemi boýunça 211 kilogram) hem mongoliýaly Anuin Ganzoriging özüniňki etdi. Itekläp götermekde (109 kilogram) we iki görnüşiň jemi boýunça (194 kilogram) bürünç medala eýranly Fatima Kişewarz mynasyp boldy. Silterläp götermekdäki kümüş medal bolsa 91 kilogram netije görkezen gazagystanly Karina Goriçýewa nesip etdi.
    
    Türkmenistanly ýene bir türgen Bunýad Raşidow bolsa 67 kilograma çenli erkekleriň arasyndaky ýaryşda silterläp götermekde 140 kilogram netije bilen kiçi bürünç medala mynasyp boldy. Itekläp götermekde 162 kilogram agyrlygy göteren Bunýad Raşidow iki görnüşiň jemi boýunça 302 kilogram netije bilen bäşinji orundan ýer aldy.\n Ýeri gelende bellesek, 5-nji maýda badalga alan Agyr atletika boýunça 
    
    Aziýa çempionaty 13-nji maýa çenli dowam eder. Ýaryşda Türkmenistana 16 türgen wekilçilik edýär.`;

const sameNews = [
  {
    id: 0,
    date: "Tibilisi - 17 Apr 2023",
    title: "Türkmenistanyň agyr atletika ýygyndysy Gruziýada türgenleşýär",
    imgLink: "/images/news/same/exact_1.png",
  },
  {
    id: 1,
    date: "Özbegistan Çirçik - 26 Iyun 2023",
    title:
      "Türkmenistanly ýetginjekler sebit ýaryşyndan 5 medal bilen dolandylar",
    imgLink: "/images/news/same/exact_2.png",
  },
  {
    id: 2,
    date: "Aşgabat - 25 Maý 2023",
    title:
      "Türkmenistanda halkara sport ýaryşlarynyň ýeňijilerine Prezidentiň sowgatlary gowşuryldy",
    imgLink: "/images/news/same/exact_3.png",
  },
  {
    id: 3,
    date: "Albaniýa Durres - 11 Mart 2023",
    title:
      "Türkmenistanyň agyr atletika boýunça ýetginjekler ýygyndylary dünýä çempionatyna gatnaşar",
    imgLink: "/images/news/same/exact_4.png",
  },
];

const Detail = () => {
  const location = useLocation();
  const {
    date,
    title,
    imgLink = "/images/news/news_11.png",
    text = defText,
    views = 35.328,
  } = location.state;
  return (
    <div className="flex flex-col items-center justify-between gap-5 w-full">
      <div className="flex items-center">
        <p className="text-[26px] font-oswald capitalize max-w-[570px] text-center">
          {title}
        </p>
      </div>
      <div className="max-w-[700px] max-h-[500px]">
        <div className="flex justify-between font-sofiasans text-xs">
          <p className="flex gap-1">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
              <path
                d="M9.19529 6.07725C9.19529 7.29135 8.2142 8.27244 7.0001 8.27244C5.786 8.27244 4.80493 7.29135 4.80493 6.07725C4.80493 4.86315 5.786 3.88208 7.0001 3.88208C8.2142 3.88208 9.19529 4.86315 9.19529 6.07725Z"
                stroke="#0088FF"
                stroke-opacity="0.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.00001 11.1482C9.16454 11.1482 11.1819 9.87277 12.5861 7.66531C13.138 6.80072 13.138 5.34748 12.5861 4.48288C11.1819 2.27542 9.16454 1 7.00001 1C4.83546 1 2.81809 2.27542 1.4139 4.48288C0.862034 5.34748 0.862034 6.80072 1.4139 7.66531C2.81809 9.87277 4.83546 11.1482 7.00001 11.1482Z"
                stroke="#0088FF"
                stroke-opacity="0.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {views}
          </p>
          <p>{date}</p>
        </div>
        <div>
          <img src={imgLink} className="object-cover" />
        </div>
      </div>
      <p className="w-full h-max text-justify font-sofiasans text-base whitespace-pre-line">
        {text}
      </p>
      <div className="flex flex-col w-full pt-20">
        <div className="flex justify-between w-full font-oswald h-max">
          <p className="border-b border-[#F65050] text-[#F65050] text-2xl w-[200px]">
            Meňzeş täzelikler
          </p>
          <div className="border-b border-black flex justify-end w-full">
            <button className="text-base bg-[#077EE6] text-white h-11 w-36">
              Hemmesini görmek
            </button>
          </div>
        </div>
        <div className="flex justify-between pt-4">
          {sameNews.map((e) => {
            return (
              <div className="flex flex-col w-[195px] gap-2">
                <img src={e.imgLink} className="object-cover h-[145px]" />
                <p className="text-[10px] font-sofiasans">{e.date}</p>
                <p className="text-sm font-oswald font-semibol cursor-pointer">{e.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
