import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React, { createElement } from "react";
import basketbolSvg from "./svg/basketbol.svg";
import atletikaSvg from "./svg/atletika.svg";
import tennisSvg from "./svg/tennis.svg";
import futbolSvg from "./svg/futbol.svg";
import agyratletSvg from "./svg/agyratlet.svg";
import boksSvg from "./svg/boks.svg";
import welosipedSvg from "./svg/welosiped.svg";
import Sports from "../../components/BCFederations/Sports";
import Trainers from "../../components/BCFederations/Trainers";
import Athlete from "../../components/BCFederations/Athlete";
import HealthCare from "../../components/BCFederations/HealthCare";
import HealthyFood from "../../components/BCFederations/HealthyFood";
import SportShops from "../../components/BCFederations/SportShops";
import Competitions from "../../components/BCFederations/Competitions";
import {
  SPORTS,
  TRAINERS,
  ATHLETE,
  HEALTHCARE,
  HEALTHYFOOD,
  SPORTSHOPS,
  COMPETITIONS,
  BASE_CATEGORIES,
} from "../../tools/links";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const federations = [
  {
    id: 0,
    titleTm: "TÜRKMENISTANYŇ BASKETBOL FEDERASIÝASY",
    titleRu: "ФЕДЕРАЦИЯ БАСКЕТБОЛА ТУРКМЕНИСТАНА",
    svg: basketbolSvg,
  },
  {
    id: 1,
    titleTm: "TÜRKMENISTANYŇ ATLETIKA FEDERASIÝASY",
    titleRu: "ФЕДЕРАЦИЯ ЛЕГКОЙ АТЛЕТИКИ ТУРКМЕНИСТАНА",
    svg: atletikaSvg,
  },
  {
    id: 2,
    titleTm: "TÜRKMENISTANYŇ STOL TENNIS FEDERASIÝASY",
    titleRu: "ФЕДЕРАЦИЯ НАСТОЛЬНОГО ТЕННИСА ТУРКМЕНИСТАНА",
    svg: tennisSvg,
  },
  {
    id: 3,
    titleTm: "TÜRKMENISTANYŇ FUTBOL FEDERASIÝASY",
    titleRu: "ФЕДЕРАЦИЯ ФУТБОЛА ТУРКМЕНИСТАНА",
    svg: futbolSvg,
  },
  {
    id: 4,
    titleTm: "TÜRKMENISTANYŇ AGYR ATLETIKA FEDERASIÝASY",
    titleRu: "ФЕДЕРАЦИЯ ВЫСОТНОЙ АТЛЕТИКИ ТУРКМЕНИСТАНА",
    svg: agyratletSvg,
  },
  {
    id: 5,
    titleTm: "TÜRKMENISTANYŇ BOKS FEDERASIÝASY",
    titleRu: "ФЕДЕРАЦИЯ БОКСА ТУРКМЕНИСТАНА",
    svg: boksSvg,
  },
  {
    id: 6,
    titleTm: "TÜRKMENISTANYŇ WELOSIPEDY SPORTY FEDERASIÝASY",
    titleRu: "ФЕДЕРАЦИЯ ВЕЛОСИПЕДНОГО СПОРТА ТУРКМЕНИСТАНА",
    svg: welosipedSvg,
  },
];
const bcfComponents = [
  Sports,
  Trainers,
  Athlete,
  HealthCare,
  HealthyFood,
  SportShops,
  Competitions,
];
export const bcfInformation = [
  {
    link: SPORTS,
    titleTm:
      "Türkmenistanyň sport we ýaşlar syýasaty ministrliginiň Düzümindäki federasiýalar",
    titleRu:
      "Федерации при Министерстве спорта и молодежной политики Туркменистана",
  },
  {
    link: TRAINERS,
    titleTm:
      "Türkmenistanyň sport we ýaşlar syýasaty ministrliginiň Düzümindäki tälimçiler",
    titleRu:
      "Тренеры в организации Министерства спорта и молодежной политики Туркменистана",
  },
  {
    link: ATHLETE,
    titleTm:
      "Türkmenistanyň sport we ýaşlar syýasaty ministrliginiň Düzümindäki sport ussatlary",
    titleRu:
      "Мастера спорта Министерства спорта и молодежной политики Туркменистана",
  },
  { link: HEALTHCARE, titleTm: "", titleRu: "" },
  { link: HEALTHYFOOD, titleTm: "", titleRu: "" },
  { link: SPORTSHOPS, titleTm: "", titleRu: "" },
  { link: COMPETITIONS, titleTm: "", titleRu: "" },
];

const Federations = () => {
  const location = useLocation();
  const prefLang = useSelector((state: any) => state.main.prefLang);
  const pathname = location.pathname.slice(BASE_CATEGORIES.length);
  const indexComponent = bcfInformation.findIndex((info) =>
    pathname.includes(info.link)
  );
  const [open, setOpen] = React.useState(3);
  const handleOpen = (value: number) =>
    setOpen(open === value ? federations.length : value);
  const fsports = useSelector((state: any) => state.federations.fsports);

  return (
    <div className="w-full max-w-[1170px] mx-32 pt-7 font-oswald">
      <div className="flex flex-col w-full items-center">
        <p className="text-[50px] text-center max-w-[975px] w-full capitalize text-[#0F1A42]">
          {prefLang === "Tm"
            ? bcfInformation[indexComponent].titleTm
            : bcfInformation[indexComponent].titleRu}
        </p>
        <div className="flex flex-col gap-8 w-full pt-10">
          {federations.map((e) => {
            return (
              <Accordion
                open={open === e.id}
                className="border-b-2 border-r-2 border-blue-100 w-full bg-white"
              >
                <AccordionHeader
                  onClick={() => handleOpen(e.id)}
                  className="h-[73px] border-none"
                >
                  <div className="flex justify-between w-full">
                    <p className="text-[#0088FF] text-[25px] flex items-center justify-center pl-8">
                      {prefLang === "Tm" ? e.titleTm : e.titleRu}
                    </p>
                    <img src={e.svg} className="w-[76px] h-[65px]" />
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div
                    className={`w-full h-max ${open != e.id ? "hidden" : ""}`}
                  >
                    {createElement(bcfComponents[indexComponent], { open })}
                  </div>
                </AccordionBody>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Federations;
