import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Athlete from "../../../components/BCFederations/Athlete";
import Sports from "../../../components/BCFederations/Sports";
import Trainers from "../../../components/BCFederations/Trainers";
import { IFederations } from "../../../redux/interfaces/federations";
import { RootState } from "../../../redux/store";

const FederationsList = ({ indexComponent }: { indexComponent: number }) => {
  const [open, setOpen] = useState("");
  const handleOpen = (value: string) => setOpen(open === value ? "" : value);
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const federations: IFederations[] = useSelector((state: RootState) => {
    switch (indexComponent) {
      case 0:
        return state.federations.federation_sports;
      case 1:
        return state.federations.federation_trainers;

      default:
        return state.federations.federation_athletes;
    }
  });

  return (
    <Fragment>
      {federations?.map((e, i) => {
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
                <img src={e.imagePath} className="w-[76px] h-[65px]" />
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className={`w-full h-max ${open != e.id ? "hidden" : ""}`}>
                {indexComponent === 0 ? (
                  <Sports data={e.fsports} />
                ) : indexComponent === 1 ? (
                  <Trainers data={e.ftrainers} />
                ) : (
                  <Athlete data={e.fathlete} />
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
