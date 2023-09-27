import React from "react";
import { ICompetition } from "../../../redux/interfaces/competitions";
import competition from "./svg/competition.svg";
import actitvity from "./svg/actitvity.svg";
import training from "./svg/training.svg";
import { useLocation, useNavigate } from "react-router-dom";

const icons = [
  { key: "bäsleşik", svg: competition },
  { key: "sport çäre", svg: actitvity },
  { key: "sport okuw", svg: training },
];

const Item = ({ data, l }: { data: ICompetition; l: string }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const linkTo = () => {
    navigate(pathname + "/id", { state: { competitionId: data.id } });
  };

  return (
    <div
      className="flex flex-col w-[260px] text-center font-sofiasans gap-3 cursor-pointer"
      onClick={linkTo}
    >
      <div className="border border-black ">
        <div className="bg-[#DBEEFF] py-2 flex justify-center gap-3 items-center">
          <img
            src={
              icons.find((i) =>
                data.competitionType.nameTm.toLocaleLowerCase().includes(i.key)
              )?.svg
            }
            alt=""
          />
          <p className="text-xl font-semibold">
            {l === "Tm"
              ? data.competitionType.nameTm
              : data.competitionType.nameRu}
          </p>
        </div>
        <div>
          <img
            src={"http://localhost:3000/" + data.imagePath}
            alt=""
            className="w-full h-[200px] object-cover object-center"
          />
        </div>
      </div>
      <p className="text-[10px] text-start">
        {data.location +
          " - " +
          data.dateStart.getDay() +
          "." +
          data.dateStart.getMonth() +
          "~" +
          data.endDate.getDay() +
          "." +
          data.endDate.getMonth() +
          "." +
          data.endDate.getFullYear()}
        {l === "Tm" ? "ý" : "г"}
      </p>
      <p className="font-oswald text-sm text-left hover:underline hover:decoration-blue-500">
        {l === "Tm" ? data.nameTm : data.nameRu}
      </p>
    </div>
  );
};

export default Item;
