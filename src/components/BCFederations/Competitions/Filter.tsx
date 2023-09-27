import React, { useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  List,
  ListItem,
} from "@material-tailwind/react";
import { ICompetitionState } from "../../../redux/interfaces/competitions";
import Datepicker from "react-tailwindcss-datepicker";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";

const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="10"
    viewBox="0 0 20 10"
    fill="none"
  >
    <path
      d="M9.99998 9.91921C9.19237 9.91921 8.38475 9.6077 7.77327 8.99622L0.250938 1.4739C-0.0836459 1.13932 -0.0836459 0.585522 0.250938 0.250938C0.585522 -0.0836459 1.13932 -0.0836459 1.4739 0.250938L8.99623 7.77326C9.55003 8.32705 10.4499 8.32705 11.0037 7.77326L18.5261 0.250938C18.8607 -0.0836459 19.4145 -0.0836459 19.7491 0.250938C20.0836 0.585522 20.0836 1.13932 19.7491 1.4739L12.2267 8.99622C11.6152 9.6077 10.8076 9.91921 9.99998 9.91921Z"
      fill="white"
    />
  </svg>
);
const countries = [
  {
    id: 0,
    nameTm: "Türkmenistan",
    nameRu: "Туркменистан",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 1,
    nameTm: "Aşgabat",
    nameRu: "Ашхабад",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    nameTm: "Lebap",
    nameRu: "Лебап",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    nameTm: "Ahal",
    nameRu: "Ахал",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    nameTm: "Mary",
    nameRu: "Мари",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    nameTm: "Daşoguz",
    nameRu: "Дашогуз",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    nameTm: "Balkan",
    nameRu: "Балкан",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const Filter = () => {
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const { competitionTypes }: ICompetitionState = useSelector(
    (state: RootState) => state.competitions
  );
  const [filterType, setFilterType] = useState({
    id: 0,
    nameTm: "Hemmesi",
    nameRu: "Все они",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const [filterCountry, setFilterCountry] = useState(countries[0]);
  const [filterDate, setFilterDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const handleFilterDate = (newDate: DateValueType) => {
    setFilterDate(newDate);
  };
  const searchCompetition = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full border border-[#0088FF] p-12 flex flex-col gap-9 font-sofiasans">
      <p className="text-[#182135] text-3xl">
        {prefLang === "Tm" ? "Filter" : "Фильтровать"}
      </p>
      <form className="flex w-full gap-9" onSubmit={searchCompetition}>
        <div className="w-full flex flex-col gap-8">
          <label htmlFor="" className="flex border border-[#0088FF] px-8 py-5">
            <input
              type="text"
              placeholder={
                prefLang === "Tm"
                  ? "Ýurdumyzda geçirilýän bäsleşikleri gözle..."
                  : "Поиск соревнований, проводимых в стране..."
              }
              className="w-full font-sofiasans text-base outline-none"
            />
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M0.75 15.3027C0.75 23.3247 7.2807 29.8554 15.3027 29.8554C23.3247 29.8554 29.8554 23.3247 29.8554 15.3027C29.8554 7.2807 23.3247 0.75 15.3027 0.75C7.2807 0.75 0.75 7.2807 0.75 15.3027ZM3.34308 15.3027C3.34308 8.71482 8.70124 3.34308 15.3027 3.34308C21.9041 3.34308 27.2623 8.71482 27.2623 15.3027C27.2623 21.8906 21.9041 27.2623 15.3027 27.2623C8.70124 27.2623 3.34308 21.8906 3.34308 15.3027Z"
                fill="#182135"
                stroke="#182135"
                stroke-width="0.5"
              />
              <path
                d="M29.0386 30.8693C29.2972 31.128 29.6271 31.2495 29.9549 31.2495C30.2828 31.2495 30.6126 31.128 30.8712 30.8693C31.3735 30.367 31.3735 29.5389 30.8712 29.0366L28.0805 26.2459C27.5782 25.7436 26.7501 25.7436 26.2478 26.2459C25.7455 26.7482 25.7455 27.5762 26.2478 28.0785L29.0386 30.8693Z"
                fill="#182135"
                stroke="#182135"
                stroke-width="0.5"
              />
            </svg>
          </label>
          <div className="w-full flex justify-between text-white">
            <Popover placement="bottom">
              <PopoverHandler>
                <button
                  type="button"
                  className="p-0 bg-[#0088FF] flex justify-between max-w-[310px] w-full h-[68px] font-sofiasans text-xl px-7 items-center"
                >
                  {prefLang === "Tm" ? filterType.nameTm : filterType.nameRu}
                  {arrow}
                </button>
              </PopoverHandler>
              <PopoverContent className="rounded-none max-w-[310px] w-full">
                <List className="p-0">
                  {competitionTypes.map((t, i) => {
                    return (
                      <ListItem
                        key={i}
                        onClick={() => setFilterType(t)}
                        className="hover:bg-blue-100 rounded-none w-full px-2"
                      >
                        {prefLang === "Tm" ? t.nameTm : t.nameRu}
                      </ListItem>
                    );
                  })}
                </List>
              </PopoverContent>
            </Popover>
            <Popover placement="bottom">
              <PopoverHandler>
                <button
                  type="button"
                  className="p-0 bg-[#0088FF] flex justify-between max-w-[310px] w-full h-[68px] font-sofiasans text-xl px-7 items-center"
                >
                  {prefLang === "Tm"
                    ? filterCountry.nameTm
                    : filterCountry.nameRu}
                  {arrow}
                </button>
              </PopoverHandler>
              <PopoverContent className="rounded-none max-w-[310px] w-full">
                <List className="p-0">
                  {countries.map((c, i) => {
                    return (
                      <ListItem
                        key={i}
                        onClick={() => setFilterCountry(c)}
                        className="hover:bg-blue-100 rounded-none w-full px-2"
                      >
                        {prefLang === "Tm" ? c.nameTm : c.nameRu}
                      </ListItem>
                    );
                  })}
                </List>
              </PopoverContent>
            </Popover>
          </div>
          <button
            type="submit"
            className="h-[68px] bg-[#0F1A42] text-white text-[32px] font-semibold"
          >
            {prefLang === "Tm" ? "GÖZLEMEK" : "ПОИСК"}
          </button>
        </div>
        <div className="max-w-[284px] w-full">
          {/* <Calendar /> */}
          <Datepicker
            useRange={false}
            value={filterDate}
            onChange={handleFilterDate}
            placeholder={
              prefLang === "Tm"
                ? "Sene aralygynda saýlaň!"
                : "Выберите диапазон дат!"
            }
            i18n={prefLang === "Tm" ? "tk" : "ru"}
            popoverDirection="down"
            readOnly={true}
            startWeekOn={'mon'}
            inputClassName={`rounded-none w-full py-6 pl-8 outline-none border border-[#0088FF]`}
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;
