import React from "react";
import rating from "../../assets/svg/rating.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IFTrainers } from "../../redux/interfaces/federations";
import { urlBack } from "../../redux/apiCalls";
import { RootState } from "../../redux/store";

const Trainers = ({ data }: { data: IFTrainers[] }) => {
  console.log(data);
  
  const navigate = useNavigate();
  const location = useLocation();
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  return (
    <div className="flex flex-col gap-[5px]">
      <div className="pt-8 px-8">
        <div className="w-full h-[395px] grid grid-cols-3 gap-4 justify-between overflow-auto">
          {data.map((trainer, index) => {
            return (
              <button
                className="max-w-[345px] h-[120px] flex border border-[#0088FF] scroll-mt-6"
                key={index}
                onClick={() =>
                  navigate(location.pathname + "/id", {
                    state: { id: trainer.id, who: "trainer" },
                  })
                }
              >
                <img
                  src={urlBack + trainer.imagePath}
                  className="object-cover w-[95px] h-full"
                />
                <div className="pl-2 font-sofiasans flex flex-col justify-around w-full">
                  <p className="text-[#0F1A42] font-semibold text-left">
                    {trainer.name}
                  </p>
                  <div className="font-sofiasans text-[10px] text-[#182135] overflow-hidden">
                    <p className="h-[14px] flex items-center">
                      Ýaşy: {trainer.age}
                    </p>
                    <p className="h-[14px] flex items-center">
                      Doglan ýeri: {trainer.birthPlace}
                    </p>
                    <p className="h-[14px] flex items-center">
                      Sport derejesi: {trainer.sportLevel}
                    </p>
                    <p className="h-[14px] flex items-center">
                      Iş wezipesi: {trainer.job}
                    </p>
                    <p className="h-[14px] flex items-center">
                      Iş tejribesi: {trainer.experience} ýyl
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="bg-[#CCE6D8] text-[#00843D] px-2 flex items-center justify-center rounded-md">
                      MILLI
                    </div>
                    <img src={rating} className="h-[15px] pr-1" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="px-[48px] py-1 flex justify-end">
        <button
          className="bg-[#077EE6] text-white h-[44px] w-[148px] font-oswald text-base"
          onClick={() => {
            navigate(location.pathname + "/all");
          }}
        >
          {prefLang === "Tm" ? "Hemmesini görmek" : "Посмотреть все"}
        </button>
      </div>
    </div>
  );
};

export default Trainers;
