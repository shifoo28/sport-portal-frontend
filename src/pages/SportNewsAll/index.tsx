import React from "react";
import FootballNewsBody from "../../components/World Sport News/FootballNewsBody";
import { HeaderWithoutCategories } from "../../components/World Sport News/Headers";
import { useSelector } from "react-redux";

const news = [
  {
    id: 0,
    title: "Türkmenistanyň agyr atletika ýygyndysy Gruziýada türgenleşýär",
    location: "Tibilisi - 17 Apr 2023",
    imagePath: "/images/news/same/exact_1.png",
  },
  {
    id: 1,
    title:
      "Türkmenistanly ýetginjekler sebit ýaryşyndan 5 medal bilen dolandylar",
    location: "Özbegistan Çirçik - 26 Iyun 2023",
    imagePath: "/images/news/same/exact_2.png",
  },
  {
    id: 2,
    title:
      "Türkmenistanda halkara sport ýaryşlarynyň ýeňijilerine Prezidentiň sowgatlary gowşuryldy",
    location: "Aşgabat - 25 Maý 2023",
    imagePath: "/images/news/same/exact_3.png",
  },
  {
    id: 3,
    title:
      "Türkmenistanyň agyr atletika boýunça ýetginjekler ýygyndylary dünýä çempionatyna gatnaşar",
    location: "Albaniýa Durres - 11 Mart 2023",
    imagePath: "/images/news/same/exact_4.png",
  },
  {
    id: 0,
    title: "Türkmenistanyň agyr atletika ýygyndysy Gruziýada türgenleşýär",
    location: "Tibilisi - 17 Apr 2023",
    imagePath: "/images/news/same/exact_1.png",
  },
  {
    id: 1,
    title:
      "Türkmenistanly ýetginjekler sebit ýaryşyndan 5 medal bilen dolandylar",
    location: "Özbegistan Çirçik - 26 Iyun 2023",
    imagePath: "/images/news/same/exact_2.png",
  },
  {
    id: 2,
    title:
      "Türkmenistanda halkara sport ýaryşlarynyň ýeňijilerine Prezidentiň sowgatlary gowşuryldy",
    location: "Aşgabat - 25 Maý 2023",
    imagePath: "/images/news/same/exact_3.png",
  },
  {
    id: 3,
    title:
      "Türkmenistanyň agyr atletika boýunça ýetginjekler ýygyndylary dünýä çempionatyna gatnaşar",
    location: "Albaniýa Durres - 11 Mart 2023",
    imagePath: "/images/news/same/exact_4.png",
  },
  {
    id: 0,
    title: "Türkmenistanyň agyr atletika ýygyndysy Gruziýada türgenleşýär",
    location: "Tibilisi - 17 Apr 2023",
    imagePath: "/images/news/same/exact_1.png",
  },
  {
    id: 1,
    title:
      "Türkmenistanly ýetginjekler sebit ýaryşyndan 5 medal bilen dolandylar",
    location: "Özbegistan Çirçik - 26 Iyun 2023",
    imagePath: "/images/news/same/exact_2.png",
  },
  {
    id: 2,
    title:
      "Türkmenistanda halkara sport ýaryşlarynyň ýeňijilerine Prezidentiň sowgatlary gowşuryldy",
    location: "Aşgabat - 25 Maý 2023",
    imagePath: "/images/news/same/exact_3.png",
  },
  {
    id: 3,
    title:
      "Türkmenistanyň agyr atletika boýunça ýetginjekler ýygyndylary dünýä çempionatyna gatnaşar",
    location: "Albaniýa Durres - 11 Mart 2023",
    imagePath: "/images/news/same/exact_4.png",
  },
  {
    id: 0,
    title: "Türkmenistanyň agyr atletika ýygyndysy Gruziýada türgenleşýär",
    location: "Tibilisi - 17 Apr 2023",
    imagePath: "/images/news/same/exact_1.png",
  },
  {
    id: 1,
    title:
      "Türkmenistanly ýetginjekler sebit ýaryşyndan 5 medal bilen dolandylar",
    location: "Özbegistan Çirçik - 26 Iyun 2023",
    imagePath: "/images/news/same/exact_2.png",
  },
  {
    id: 2,
    title:
      "Türkmenistanda halkara sport ýaryşlarynyň ýeňijilerine Prezidentiň sowgatlary gowşuryldy",
    location: "Aşgabat - 25 Maý 2023",
    imagePath: "/images/news/same/exact_3.png",
  },
  {
    id: 3,
    title:
      "Türkmenistanyň agyr atletika boýunça ýetginjekler ýygyndylary dünýä çempionatyna gatnaşar",
    location: "Albaniýa Durres - 11 Mart 2023",
    imagePath: "/images/news/same/exact_4.png",
  },
  {
    id: 0,
    title: "Türkmenistanyň agyr atletika ýygyndysy Gruziýada türgenleşýär",
    location: "Tibilisi - 17 Apr 2023",
    imagePath: "/images/news/same/exact_1.png",
  },
  {
    id: 1,
    title:
      "Türkmenistanly ýetginjekler sebit ýaryşyndan 5 medal bilen dolandylar",
    location: "Özbegistan Çirçik - 26 Iyun 2023",
    imagePath: "/images/news/same/exact_2.png",
  },
  {
    id: 2,
    title:
      "Türkmenistanda halkara sport ýaryşlarynyň ýeňijilerine Prezidentiň sowgatlary gowşuryldy",
    location: "Aşgabat - 25 Maý 2023",
    imagePath: "/images/news/same/exact_3.png",
  },
  {
    id: 3,
    title:
      "Türkmenistanyň agyr atletika boýunça ýetginjekler ýygyndylary dünýä çempionatyna gatnaşar",
    location: "Albaniýa Durres - 11 Mart 2023",
    imagePath: "/images/news/same/exact_4.png",
  },
  {
    id: 0,
    title: "Türkmenistanyň agyr atletika ýygyndysy Gruziýada türgenleşýär",
    location: "Tibilisi - 17 Apr 2023",
    imagePath: "/images/news/same/exact_1.png",
  },
  {
    id: 1,
    title:
      "Türkmenistanly ýetginjekler sebit ýaryşyndan 5 medal bilen dolandylar",
    location: "Özbegistan Çirçik - 26 Iyun 2023",
    imagePath: "/images/news/same/exact_2.png",
  },
  {
    id: 2,
    title:
      "Türkmenistanda halkara sport ýaryşlarynyň ýeňijilerine Prezidentiň sowgatlary gowşuryldy",
    location: "Aşgabat - 25 Maý 2023",
    imagePath: "/images/news/same/exact_3.png",
  },
  {
    id: 3,
    title:
      "Türkmenistanyň agyr atletika boýunça ýetginjekler ýygyndylary dünýä çempionatyna gatnaşar",
    location: "Albaniýa Durres - 11 Mart 2023",
    imagePath: "/images/news/same/exact_4.png",
  },
];

const SportNewsAll = () => {
  const prefLang = useSelector((state: any) => state.main.prefLang);

  return (
    <div className="w-full mx-32 max-w-[1170px]">
      <div className="w-full flex justify-between gap-8 pt-8">
        <div className="w-[445px]">
          <HeaderWithoutCategories
            title={
              prefLang == "Tm" ? "Toparlar Statistika" : "Статистика команды"
            }
          />
          <FootballNewsBody />
        </div>
        <div className="w-full">
            <div className="flex h-11 font-oswald text-2xl w-full">
              <div
                className={`flex items-center max-w-[160px] w-full border-b border-[#F65050] text-[#F65050]`}
              >
                {prefLang == "Tm" ? "Futbol  täzelikler" : "Новости футбола"}
              </div>
              <span className="border-b border-black w-full"></span>
            </div>
          <div className="grid grid-cols-4 w-full pt-5 gap-4">
            {news.map((i) => {
              return (
                <div className="flex flex-col gap-1">
                  <img
                    src={i.imagePath}
                    className="w-[195px] h-[145px] object-cover"
                  />
                  <p className="text-[10px] font-sofiasans">{i.location}</p>
                  <p className="text-sm font-oswald">{i.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportNewsAll;
