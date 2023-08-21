import React from "react";
import nextSvg from "../../assets/svg/next.svg";
import prevSvg from "../../assets/svg/prev.svg";

const categories = [
  { name: "Hemmesi", active: true },
  { name: "Futbol" },
  { name: "MMA" },
  { name: "Agyr atletika" },
  { name: "Tennis" },
];

export const HeaderWithCategories = () => {
  return (
    <div className="h-11 flex justify-between font-oswald">
      <div className="max-w-[180px] w-full border-red-600 border-b text-2xl text-red-600 font-semibold">
        Wideo täzelikler
      </div>
      <div
        className="flex justify-end items-center border-b border-black w-full text-white text-xs 
                            gap-3"
      >
        {categories.map((e) => {
          return (
            <div
              className={`h-6 px-4 bg-[#0E2165] flex items-center hover:bg-[#0088FF] cursor-pointer ${
                e.active ? "bg-[#0088FF]" : ""
              }`}
            >
              {e.name}
            </div>
          );
        })}
        <div className="flex gap-3">
          <img
            src={prevSvg}
            className="bg-[#6E748C] h-6 w-6 cursor-pointer"
          />
          <img
            src={nextSvg}
            className="bg-[#0E2165] h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
