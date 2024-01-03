import React from "react";
import SearchBar from "./SearchBar";
import SelectLang from "./SelectLang";
import Account from "./Account";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/store";

export const monthsTm = [
  "Ýanwar",
  "Fewral",
  "Mart",
  "Aprel",
  "Maý",
  "Iýun",
  "Iýul",
  "Awgust",
  "Sentýabr",
  "Oktýabr",
  "Noýabr",
  "Dekabr",
];
export const monthsRu = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
export const daysTm = [
  "Ýekşenbe",
  "Duşenbe",
  "Sişenbe",
  "Çarşenbe",
  "Penşenbe",
  "Anna",
  "Şenbe",
];
export const daysRu = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const ToolBox = () => {
  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  // const weather = useSelector((state: RootState) => state.main.weather);

  // Hooks
  const navigate = useNavigate();

  // Operations
  const d = new Date();
  let year = `${d.getFullYear()}${prefLang === "Tm" ? "ý" : "г"}`;
  let month =
    prefLang === "Tm" ? monthsTm[d.getMonth()] : monthsRu[d.getMonth()];
  let date = d.getDate();
  let day = prefLang === "Tm" ? daysTm[d.getDay()] : daysRu[d.getDay()];

  // Function
  const linkToBase = () => {
    navigate("/");
  };

  return (
    <section className="w-full h-16 font-sofiasans text-xs">
      <div className="mx-32 flex justify-between max-w-[1170px] h-full">
        <div className="flex flex-col justify-around w-full">
          <div>{day + ", " + date + " " + month + " " + year}</div>
          <div>
            {prefLang === "Tm" ? `${15}°C Aşgabat` : `В Ашхабаде ${15}°C`}
          </div>
        </div>
        <div
          className="flex gap-3 items-center cursor-pointer min-w-max"
          onClick={linkToBase}
        >
          <img
            src="/icons/toolbox/logo.png"
            className="w-[90px] h-[50px] object-cove object-contain"
            alt=""
          />
          <span className="flex">
            <p className="text-[#0F1A42] text-4xl font-oswald uppercase">
              Sport
            </p>
            <p className="text-[#08F] text-4xl font-oswald uppercase">Portal</p>
          </span>
        </div>
        <div className="flex flex-col justify-around items-end w-full">
          <div className="flex items-center gap-3">
            <SearchBar prefLang={prefLang} />
            <hr className="border-l h-full" />
            <SelectLang />
          </div>
          <Account prefLang={prefLang} />
        </div>
      </div>
    </section>
  );
};

export default ToolBox;
