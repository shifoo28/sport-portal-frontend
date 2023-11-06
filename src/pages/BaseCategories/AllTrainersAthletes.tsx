import React from "react";
import AllAhtlete from "../../components/BaseCategories/AllAhtlete";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { urlBack } from "../../redux/apiCalls";
import { ATHLETE } from "../../tools/links";
import { IFederations } from "../../redux/interfaces/federations";
import AllTrainers from "../../components/BaseCategories/AllTrainers";

const AllCategories = () => {
  // Hooks
  const { state, pathname } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const all: IFederations[] = useSelector((state: RootState) =>
    pathname.includes(ATHLETE)
      ? state.federations.federation_athletes
      : state.federations.federation_trainers
  );

  // Opreation
  const federation = all.find((fat) => fat.id === state.federationId);

  return (
    <div className="w-full flex justify-center pt-14">
      <div className="max-w-[1100px] w-full flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p className="text-[#0088FF] text-[25px] font-oswald font-semibold">
            {prefLang === "Tm" ? federation?.nameTm : federation?.nameRu}
          </p>
          <img src={urlBack + federation?.imagePath} alt="" />
        </div>
        {pathname.includes(ATHLETE) ? (
          <AllAhtlete athletes={federation?.fathlete || []} />
        ) : (
          <AllTrainers trainers={federation?.ftrainers || []} />
        )}
      </div>
    </div>
  );
};

export default AllCategories;
