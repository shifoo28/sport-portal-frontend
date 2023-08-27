import React from "react";
import SearchBar from "./SearchBar";
import SelectLang from "./SelectLang";
import Account from "./Account";
import { useSelector } from "react-redux";

const monthsTm = [
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
const monthsRu = [
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
const daysTm = [
  "Ýekşenbe",
  "Duşenbe",
  "Sişenbe",
  "Çarşenbe",
  "Penşenbe",
  "Anna",
  "Şenbe",
];
const daysRu = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const index = ({
  navigate,
  prefLang,
}: {
  navigate: (l: string) => void;
  prefLang: string;
}) => {
  const d = new Date();
  let year = `${d.getFullYear()}${prefLang === "Tm" ? "ý" : "г"}`;
  let month =
    prefLang === "Tm" ? monthsTm[d.getMonth()] : monthsRu[d.getMonth()];
  let date = d.getDate();
  let day = prefLang === "Tm" ? daysTm[d.getDay()] : daysRu[d.getDay()];

  return (
    <section className="w-full h-16 font-sofiasans text-xs">
      <div className="mx-32 flex justify-between max-w-[1170px] h-full">
        <div className="flex flex-col justify-around w-full">
          <div>{day + ", " + date + " " + month + " " + year}</div>
          <div>{prefLang === "Tm" ? "15°C Aşgabat" : "В Ашхабаде 15°C"}</div>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="/icons/toolbox/logo.png"
            className="w-12 h-14 object-cover"
          />
          <span className="flex pl-4">
            <p className="text-[#0F1A42] text-4xl font-oswald uppercase">
              Sport
            </p>
            <p className="text-[#08F] text-4xl font-oswald uppercase">Portal</p>
          </span>
        </div>
        <div className="flex flex-col justify-around items-end w-full">
          <span className="flex items-center gap-2">
            <SearchBar prefLang={prefLang} />|<SelectLang />
          </span>
          <Account prefLang={prefLang} />
        </div>
      </div>
    </section>
  );
};

export default index;
