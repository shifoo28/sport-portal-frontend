import React from "react";
import rating from "../../assets/svg/rating.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IFTrainers } from "../../redux/interfaces/federations";
import { urlBack } from "../../redux/apiCalls";
import { RootState } from "../../redux/store";

const Trainers = ({ data }: { data: IFTrainers[] }) => {
  // Hooks
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  // Function
  const linkToTrainerDetail = (trainerId: string, federationId: string) => {
    navigate(pathname + "/id", {
      state: { trainerId, federationId },
    });
  };
  const linktoAllTrainers = () => {
    navigate(pathname + "/all");
  };

  return (
    <div className="flex flex-col gap-[5px]">
      <div className="pt-8 px-8">
        <div className="w-full h-[395px] flex flex-wrap justify-between overflow-auto">
          {data.map((trainer, index) => {
            return (
              <button
                key={index}
                className="w-[345px] h-max flex gap-2 border border-[#0088FF]"
                onClick={() =>
                  linkToTrainerDetail(trainer.id, trainer.federationId)
                }
              >
                <img
                  src={urlBack + trainer.imagePath}
                  className="object-cover w-[95px] h-[112px] object-center"
                />
                <div className="font-sofiasans text-[#182135] flex flex-col justify-around w-full overflow-hidden">
                  <p className="font-semibold text-left truncate">
                    {prefLang === "Tm" ? trainer.nameTm : trainer.nameRu}
                  </p>
                  <div className="text-[10px]">
                    <p className="h-[14px] flex items-center">
                      Ýaşy: {trainer.age}
                    </p>
                    <p className="h-[14px] flex items-center">
                      <p className="min-w-max">Doglan ýeri:</p>
                      <p className="truncate">
                        {prefLang === "Tm"
                          ? trainer.birthPlaceTm
                          : trainer.birthPlaceRu}
                      </p>
                    </p>
                    <p className="h-[14px] flex items-center space-x-1">
                      <p className="min-w-max">Sport derejesi:</p>
                      <p className=" truncate">
                        {prefLang === "Tm"
                          ? trainer.sportLevelTm
                          : trainer.sportLevelRu}
                      </p>
                    </p>
                    <p className="h-[14px] flex items-center space-x-1">
                      <p className="min-w-max">Iş wezipesi:</p>
                      <p className="truncate">
                        {prefLang === "Tm" ? trainer.jobTm : trainer.jobRu}
                      </p>
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
          onClick={() => linktoAllTrainers}
        >
          {prefLang === "Tm" ? "Hemmesini görmek" : "Посмотреть все"}
        </button>
      </div>
    </div>
  );
};

export default Trainers;
