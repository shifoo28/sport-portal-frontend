import React from "react";
import AllAhtlete from "../../components/BCFederations/AllAhtlete";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IFederations } from "../../redux/interfaces/federations";
import { urlBack } from "../../redux/apiCalls";

const AllCategories = () => {
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const { state } = useLocation();
  const federation: IFederations = state.federation;

  return (
    <div className="w-full flex justify-center pt-14">
      <div className="max-w-[1100px] w-full flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p className="text-[#0088FF] text-[25px] font-oswald font-semibold">
            {prefLang === "Tm" ? federation.nameTm : federation.nameRu}
          </p>
          <img src={urlBack + federation.imagePath} alt="" />
        </div>
        <AllAhtlete />
      </div>
    </div>
  );
};

export default AllCategories;
