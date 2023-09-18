import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Filter = () => {
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  return (
    <div className="w-full border border-[#0088FF] p-12">
      <p className="text-[#182135] font-sofiasans text-3xl">
        {prefLang === "Tm" ? "Filter" : "Фильтровать"}
      </p>
      <form method="get"></form>
    </div>
  );
};

export default Filter;
