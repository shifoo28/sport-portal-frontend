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
import GymsAndClubs from "../../components/BCFederations/GymsAndClubs";
import HealthCare from "../../components/BCFederations/HealthCare";
import HealthyFood from "../../components/BCFederations/HealthyFood";
import SportShops from "../../components/BCFederations/SportShops";
import Competitions from "../../components/BCFederations/Competitions";
import {
  SPORTS,
  TRAINERS,
  ATHLETE,
  GYMSANDCLUBS,
  HEALTHCARE,
  HEALTHYFOOD,
  SPORTSHOPS,
  COMPETITIONS,
} from "../../tools/links";

const federations = [
  {
    id: 0,
    title: "TÜRKMENISTANYŇ BASKETBOL FEDERASIÝASY",
    svg: basketbolSvg,
  },
  {
    id: 1,
    title: "TÜRKMENISTANYŇ ATLETIKA FEDERASIÝASY",
    svg: atletikaSvg,
  },
  {
    id: 2,
    title: "TÜRKMENISTANYŇ STOL TENNIS FEDERASIÝASY",
    svg: tennisSvg,
  },
  {
    id: 3,
    title: "TÜRKMENISTANYŇ FUTBOL FEDERASIÝASY",
    svg: futbolSvg,
  },
  {
    id: 4,
    title: "TÜRKMENISTANYŇ AGYR ATLETIKA FEDERASIÝASY",
    svg: agyratletSvg,
  },
  {
    id: 5,
    title: "TÜRKMENISTANYŇ BOKS FEDERASIÝASY",
    svg: boksSvg,
  },
  {
    id: 6,
    title: "TÜRKMENISTANYŇ WELOSIPEDY SPORTY FEDERASIÝASY",
    svg: welosipedSvg,
  },
];
const bcfComponents = [
  Sports,
  Trainers,
  Athlete,
  GymsAndClubs,
  HealthCare,
  HealthyFood,
  SportShops,
  Competitions,
];
const bcfInformation = [
  {
    link: SPORTS,
    title:
      "Türkmenistanyň sport we ýaşlar syýasaty ministrliginiň Düzümindäki federasiýalar",
  },
  {
    link: TRAINERS,
    title:
      "Türkmenistanyň sport we ýaşlar syýasaty ministrliginiň Düzümindäki tälimçiler",
  },
  {
    link: ATHLETE,
    title:
      "Türkmenistanyň sport we ýaşlar syýasaty ministrliginiň Düzümindäki sport ussatlary",
  },
  { link: GYMSANDCLUBS, title: "" },
  { link: HEALTHCARE, title: "" },
  { link: HEALTHYFOOD, title: "" },
  { link: SPORTSHOPS, title: "" },
  { link: COMPETITIONS, title: "" },
];

const Federations = ({ pathname }: { pathname: string }) => {
  const indexComponent = bcfInformation.findIndex((info) =>
    pathname.includes(info.link)
  );
  const [open, setOpen] = React.useState(3);
  const handleOpen = (value: number) =>
    setOpen(open === value ? federations.length : value);

  return (
    <div className="w-full max-w-[1170px] mx-32 pt-7 font-oswald">
      <div className="flex flex-col w-full items-center">
        <p className="text-[50px] text-center max-w-[975px] w-full capitalize text-[#0F1A42]">
          {bcfInformation[indexComponent].title}
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
                      {e.title}
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
