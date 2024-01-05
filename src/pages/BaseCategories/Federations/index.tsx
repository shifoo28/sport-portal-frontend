import React from "react";
import { SPORTS, TRAINERS, ATHLETE } from "../../../tools/links";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  GET_FEDERATION_ATHLETES,
  GET_FEDERATION_SPORTS,
  GET_FEDERATION_TRAINERS,
} from "../../../redux/types";
import List from "./List";
import { RootState } from "../../../redux/store";
import AllMembers from "../AllMembers";

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
];

const Federations = () => {
  // Hooks
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  // Operation
  let indexComponent = bcfInformation.findIndex((info) =>
    pathname.includes(info.link)
  );
  if (indexComponent < 0) indexComponent = 0;
  indexComponent === 0
    ? dispatch({ type: GET_FEDERATION_SPORTS })
    : indexComponent === 1
    ? dispatch({ type: GET_FEDERATION_TRAINERS })
    : dispatch({ type: GET_FEDERATION_ATHLETES });

  return pathname.includes("all") ? (
    <AllMembers />
  ) : (
    <div className="w-full pt-9 font-oswald flex justify-center">
      <div className="max-w-[1170px] flex flex-col w-full items-center">
        <p className="text-[50px] text-center max-w-[975px] w-full capitalize text-[#0F1A42]">
          {prefLang === "Tm"
            ? bcfInformation[indexComponent].titleTm
            : bcfInformation[indexComponent].titleRu}
        </p>
        <div className="flex flex-col gap-8 w-full pt-10">
          <List indexComponent={indexComponent} />
        </div>
      </div>
    </div>
  );
};

export default Federations;
