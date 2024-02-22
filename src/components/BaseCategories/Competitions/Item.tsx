import React from "react";
import { ICompetition } from "../../../redux/interfaces/competitions";
import competition from "../../../assets/svg/competition.svg";
import actitvity from "../../../assets/svg/actitvity.svg";
import training from "../../../assets/svg/training.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { urlBack } from "../../../redux/apiCalls";

const icons = [
  { key: "bäsleşik", svg: competition },
  { key: "sport çäre", svg: actitvity },
  { key: "sport okuw", svg: training },
];

const Item = ({ data, lang }: { data: ICompetition; lang: string }) => {
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
                data.competitionType?.nameTm.toLocaleLowerCase().includes(i.key)
              )?.svg
            }
            alt=""
          />
          <p className="text-xl font-semibold">
            {lang === "Tm"
              ? data.competitionType?.nameTm
              : data.competitionType?.nameRu}
          </p>
        </div>
        <div>
          <img
            src={urlBack + data.imagePath}
            alt=""
            className="w-full h-[200px] object-cover object-center"
          />
        </div>
      </div>
      <p className="text-[10px] text-start">
        {`${lang === "Tm" ? data.locationTm : data.locationRu}` +
          " - " +
          new Date(data.dateStart).getDay() +
          "." +
          new Date(data.dateStart).getMonth() +
          "~" +
          new Date(data.dateEnd).getDay() +
          "." +
          new Date(data.dateEnd).getMonth() +
          "." +
          new Date(data.dateEnd).getFullYear()}
        {lang === "Tm" ? "ý" : "г"}
      </p>
      <p className="font-oswald text-sm text-left hover:underline hover:decoration-blue-500">
        {lang === "Tm" ? data.nameTm : data.nameRu}
      </p>
    </div>
  );
};

export default Item;
