import React, { useState } from "react";
import nextSvg from "../../assets/svg/next.svg";
import prevSvg from "../../assets/svg/prev.svg";
import { useSelector } from "react-redux";

export const HeaderWithCategories = () => {
  const [cIndex, setCIndex] = useState(0);
  const prefLang = useSelector((state: any) => state.main.prefLang);
  const categories: object[] = useSelector(
    (state: any) => state.main.sport_categories
  );
  const c = categories.filter(
    (i, index) => index >= cIndex && index < cIndex + 4
  );

  return (
    <div className="h-11 flex justify-between font-oswald">
      <div className="max-w-[180px] w-full border-red-600 border-b text-2xl text-red-600 font-semibold">
        {prefLang === "Tm" ? "Wideo täzelikler" : "Видео новости"}
      </div>
      <div
        className="flex justify-end items-center border-b border-black w-full text-white text-xs 
                            gap-3"
      >
        <div
          className={`h-6 px-4 bg-[#0088FF] flex items-center hover:bg-[#0088FF] cursor-pointer`}
        >
          {prefLang === "Tm" ? "Hemmesi" : "Все"}
        </div>
        {c.map((e: any) => {
          return (
            <div
              className={`h-6 px-4 bg-[#0E2165] flex items-center hover:bg-[#0088FF] cursor-pointer`}
            >
              {prefLang === "Tm" ? e.nameTm : e.nameRu}
            </div>
          );
        })}
        <div className="flex gap-3">
          <button
            disabled={!(cIndex > 0)}
            onClick={() => setCIndex(cIndex - 1)}
          >
            <img
              src={prevSvg}
              className={`h-6 w-6 ${
                !(cIndex > 0) ? "bg-[#6E748C]" : "bg-[#0E2165]"
              }`}
            />
          </button>
          <button
            disabled={cIndex === categories.length - 4}
            onClick={() => setCIndex(cIndex + 1)}
          >
            <img
              src={nextSvg}
              className={`${
                cIndex === categories.length - 4
                  ? "bg-[#6E748C]"
                  : "bg-[#0E2165]"
              } h-6 w-6 cursor-pointer`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
