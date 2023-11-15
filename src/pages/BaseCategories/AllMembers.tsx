import React from "react";
import AllAhtlete from "../../components/BaseCategories/AllMembers/AllAhtlete";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { urlBack } from "../../redux/apiCalls";
import { ATHLETE, TRAINERS } from "../../tools/links";
import { IFederations } from "../../redux/interfaces/federations";
import AllTrainers from "../../components/BaseCategories/AllMembers/AllTrainers";
import AllHCDEmployees from "../../components/BaseCategories/AllMembers/AllHCDEmployees";
import { IHCDepartment } from "../../redux/interfaces/hcdepartment";

const AllMembers = () => {
  // Hooks
  const { state, pathname } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const federationMembers: IFederations[] = useSelector((state: RootState) =>
    pathname.includes(ATHLETE)
      ? state.federations.federation_athletes
      : state.federations.federation_trainers
  );
  const departmentMembers: IHCDepartment[] = useSelector(
    (state: RootState) => state.healthcare.health_care_departments
  );

  // Opreation
  const federation = federationMembers.find(
    (fat) => fat.id === state.federationId
  );
  const department = departmentMembers.find(
    (dm) => dm.id === state.departmentId
  );

  return (
    <div className="w-full flex justify-center pt-14">
      <div className="max-w-[1100px] w-full flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p className="text-[#0088FF] text-[25px] font-oswald font-semibold">
            {prefLang === "Tm" ? federation?.nameTm : federation?.nameRu}
          </p>
          <img
            src={urlBack + federation?.imagePath}
            alt=""
            className="h-[65px] w-[57px]"
          />
        </div>
        {pathname.includes(ATHLETE) ? (
          <AllAhtlete athletes={federation?.fathlete || []} />
        ) : pathname.includes(TRAINERS) ? (
          <AllTrainers trainers={federation?.ftrainers || []} />
        ) : (
          <AllHCDEmployees employees={department?.employees || []} />
        )}
      </div>
    </div>
  );
};

export default AllMembers;
