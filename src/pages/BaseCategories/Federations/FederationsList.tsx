import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import basketbolSvg from "../svg/basketbol.svg";
import atletikaSvg from "../svg/atletika.svg";
import tennisSvg from "../svg/tennis.svg";
import futbolSvg from "../svg/futbol.svg";
import agyratletSvg from "../svg/agyratlet.svg";
import boksSvg from "../svg/boks.svg";
import welosipedSvg from "../svg/welosiped.svg";
import { IFederation } from "./interface";
import Athlete from "../../../components/BCFederations/Athlete";
import Sports from "../../../components/BCFederations/Sports";
import Trainers from "../../../components/BCFederations/Trainers";

export const fSvg = [
  {
    id: 0,
    key: "basketbol",
    svg: basketbolSvg,
  },
  {
    id: 1,
    key: "atletika",
    svg: atletikaSvg,
  },
  {
    id: 2,
    key: "stol tennis",
    svg: tennisSvg,
  },
  {
    id: 3,
    key: "futbol",
    svg: futbolSvg,
  },
  {
    id: 4,
    key: "agyr atletika",
    svg: agyratletSvg,
  },
  {
    id: 5,
    key: "boks",
    svg: boksSvg,
  },
  {
    id: 6,
    key: "welosiped",
    svg: welosipedSvg,
  },
];

const FederationsList = ({ indexComponent }: { indexComponent: number }) => {
  const [open, setOpen] = useState("");
  const handleOpen = (value: string) => setOpen(open === value ? "" : value);
  const prefLang = useSelector((state: any) => state.main.prefLang);
  const federations: IFederation[] = useSelector(
    (state: any) => state.federations.federations
  );
  const setSvg = (e: any) => {
    const index = fSvg.findIndex((svg) =>
      e.nameTm.toLocaleLowerCase().includes(svg.key)
    );
    return index >= 0 ? fSvg[index].svg : "";
  };

  return (
    <Fragment>
      {federations.map((e, i) => {
        return (
          <Accordion
            open={open === e.id}
            className="border-b-2 border-r-2 border-blue-100 w-full bg-white"
            key={i}
          >
            <AccordionHeader
              onClick={() => handleOpen(e.id)}
              className="h-[73px] border-none"
            >
              <div className="flex justify-between w-full">
                <p className="text-[#0088FF] text-[25px] flex items-center justify-center pl-8">
                  {prefLang === "Tm" ? e.nameTm : e.nameRu}
                </p>
                <img src={setSvg(e)} className="w-[76px] h-[65px]" />
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className={`w-full h-max ${open != e.id ? "hidden" : ""}`}>
                {indexComponent === 0 ? (
                  <Sports open={e.id} />
                ) : indexComponent === 1 ? (
                  <Trainers open={e.id} />
                ) : (
                  <Athlete open={e.id} />
                )}
              </div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </Fragment>
  );
};

export default FederationsList;
