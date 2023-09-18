import React from "react";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import ListofFacility from "./List";
import GMap from "./Map";
import { useLocation } from "react-router-dom";
import GACDetail from "../../Details/GACDetail";

const GymsAndClubs = () => {
  const location = useLocation();
  const { pathname } = location;
  const prefLang = useSelector((state: any) => state.main.prefLang);

  if (pathname.includes("detail")) {
    return <GACDetail />;
  } else {
    return (
      <div className="w-full h-max flex flex-col items-center gap-20 pt-8">
        <div className="max-w-[1000px] w-full">
          <p className="text-[#0F1A42] font-oswald text-[50px] text-center capitalize">
            {prefLang === "Tm"
              ? "Türkmenistandaky ähli sport toplumlary we onda hereket edýän sport toparlary"
              : "Все спортивные комплексы и спортивные команды, действующие в Туркменистане"}
          </p>
        </div>
        <Filter />
        <GMap />
        <ListofFacility />
      </div>
    );
  }
};

export default GymsAndClubs;
