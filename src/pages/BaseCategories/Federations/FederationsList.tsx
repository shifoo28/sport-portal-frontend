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
import { urlBack } from "../../../redux/apiCalls";

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
      {federations.map((federation, index) => {
        return (
          <Accordion
            open={open === federation.id}
            className="border-b-2 border-r-2 border-blue-100 w-full bg-white"
            key={index}
          >
            <AccordionHeader
              onClick={() => handleOpen(federation.id)}
              className="h-[73px] border-none"
            >
              <div className="flex justify-between w-full">
                <p className="text-[#0088FF] text-[25px] flex items-center justify-center pl-8 uppercase">
                  {prefLang === "Tm" ? federation.nameTm : federation.nameRu}
                </p>
                <img
                  src={urlBack + federation.imagePath}
                  className="w-[76px] h-[65px] object-contain object-center"
                />
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div
                className={`w-full h-max ${
                  open != federation.id ? "hidden" : ""
                }`}
              >
                {indexComponent === 0 ? (
                  <Sports data={federation.fsports} prefLang={prefLang} />
                ) : indexComponent === 1 ? (
                  <Trainers data={federation.ftrainers} />
                ) : (
                  <Athlete federation={federation} />
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
