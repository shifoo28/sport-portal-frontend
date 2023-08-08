import React from "react";
import SearchBar from "./SearchBar";
import SelectLang from "./SelectLang";
import Account from "./Account";

const index = () => {
  const months = [
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
  const days = [
    "Ýekşenbe",
    "Duşenbe",
    "Sişenbe",
    "Çarşenbe",
    "Penşenbe",
    "Anna",
    "Şenbe",
  ];
  const d = new Date();
  let year = d.getFullYear();
  let month = months[d.getMonth()];
  let date = d.getDate();
  let day = days[d.getDay()];

  return (
    <section className="w-full h-16 font-sofiasans text-xs">
      <div className="mx-32 flex justify-between max-w-[1170px]">
        <div className="flex flex-col justify-around">
          <div>{day + ", " + date + " " + month + " " + year + "ý"}</div>
          <div>15°C Aşgabat</div>
        </div>
        <div className="flex items-center">
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
        <div className="flex flex-col justify-around items-end">
          <span className="flex items-center gap-2">
            <SearchBar />|<SelectLang />
          </span>
          <Account />
        </div>
      </div>
    </section>
  );
};

export default index;
