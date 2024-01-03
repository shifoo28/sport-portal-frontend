import {
  List,
  ListItem,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import React, { useEffect, useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { POST_GYMS_AND_CLUBS_FILTER } from "../../../redux/types";

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

const Filter = () => {
  const dispatch = useDispatch();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const sportTypes: string[] = useSelector(
    (state: RootState) => state.gymsclubs.filters[0]?.filters
  );
  const locations: string[] = useSelector(
    (state: RootState) => state.gymsclubs.filters[1]?.filters
  );

  // useState
  const [searchString, setSearchString] = useState("");
  const [sportTypesFilter, setSportTypesFilter] = useState("");
  const [locationsFilter, setLocationsFilter] = useState("");

  // Other Hooks
  useEffect(() => {
    setSportTypesFilter(prefLang === "Tm" ? "Sport görnüşler" : "Виды спорта");
    setLocationsFilter(prefLang === "Tm" ? "Şäherler" : "Городов");
    setSearchString("");
  }, [prefLang]);

  // Functions
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: POST_GYMS_AND_CLUBS_FILTER,
      payload: {
        name: searchString,
        sports: sportTypes.includes(sportTypesFilter)
          ? sportTypesFilter
          : undefined,
        locations: locations.includes(locationsFilter)
          ? locationsFilter
          : undefined,
        lang: prefLang,
      },
    });
    setSearchString("");
    window.scrollTo({ top: 1100, behavior: "smooth" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#0088FF] w-full p-9 font-sofiasans flex flex-col gap-7"
    >
      <p className="text-3xl font-semibold">
        {prefLang === "Tm"
          ? "Türgenleşik desgalaryň gözlegi"
          : "Обследование жилых объектов"}
      </p>
      <label htmlFor="" className="flex border border-[#0088FF] px-8 py-5">
        <input
          type="text"
          placeholder={
            prefLang === "Tm"
              ? "Desgalaryň we sport görnüşleriniň adyny giriz..."
              : "Введите название учреждения и спорта..."
          }
          className="w-full font-sofiasans text-base outline-none"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
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
      <p className="text-3xl border-b border-[#ABAAAA] py-4 px-6 font-semibold">
        {prefLang === "Tm"
          ? "ýa-da aşakdan gyzyklanýan görnüşiňeze görä saýlap bilersiňiz"
          : "или вы можете фильтровать по типу вашего интереса"}
      </p>
      <div className="py-3 text-white font-sofiasans flex justify-between">
        {/* Filter Column 1 */}
        <div className="w-full gap-9 flex flex-col">
          {/* SPORT TYPES */}
          <Popover>
            <PopoverHandler>
              <button
                type="button"
                className="p-0 bg-[#0088FF] flex justify-between max-w-[310px] w-full h-[45px] font-sofiasans text-base px-7 items-center"
              >
                <p>{sportTypesFilter}</p>
                {arrow}
              </button>
            </PopoverHandler>
            <PopoverContent
              className="rounded-none max-w-[310px] w-full border border-[#0088FF]"
              placeholder=""
            >
              <List className="p-0" placeholder="">
                {sportTypes?.map((name, i) => {
                  return (
                    <ListItem
                      key={i}
                      onClick={() => setSportTypesFilter(name)}
                      className="hover:bg-blue-100 rounded-none w-full px-2"
                      placeholder=""
                    >
                      {name}
                    </ListItem>
                  );
                })}
              </List>
            </PopoverContent>
          </Popover>
          {/* SPORT BUILDINGS */}
          <Popover>
            <PopoverHandler>
              <button
                type="button"
                className="p-0 bg-[#0088FF] flex justify-between max-w-[310px] w-full h-[45px] font-sofiasans text-base px-7 items-center"
              >
                <p>
                  {prefLang === "Tm"
                    ? "Sport desgalar"
                    : "Спортивные сооружения"}
                </p>
                {arrow}
              </button>
            </PopoverHandler>
            <PopoverContent placeholder=""> </PopoverContent>
          </Popover>
        </div>
        {/* Filter Column 2 */}
        <div className="w-full gap-9 flex flex-col">
          {/* LOCATIONS */}
          <Popover>
            <PopoverHandler>
              <button
                type="button"
                className="p-0 bg-[#0088FF] flex justify-between max-w-[310px] w-full h-[45px] font-sofiasans text-base px-7 items-center"
              >
                <p>{locationsFilter}</p>
                {arrow}
              </button>
            </PopoverHandler>
            <PopoverContent
              className="rounded-none max-w-[310px] w-full border border-[#0088FF]"
              placeholder=""
            >
              <List className="p-0" placeholder="">
                {locations?.map((l, i) => {
                  return (
                    <ListItem
                      key={i}
                      onClick={() => setLocationsFilter(l)}
                      className="hover:bg-blue-100 rounded-none w-full px-2"
                      placeholder=""
                    >
                      {l}
                    </ListItem>
                  );
                })}
              </List>
            </PopoverContent>
          </Popover>
          {/* TEAMS */}
          <Popover>
            <PopoverHandler>
              <button
                type="button"
                className="p-0 bg-[#0088FF] flex justify-between max-w-[310px] w-full h-[45px] font-sofiasans text-base px-7 items-center"
              >
                <p>{prefLang === "Tm" ? "Toparlar" : "Команды"}</p>
                {arrow}
              </button>
            </PopoverHandler>
            <PopoverContent placeholder=""> </PopoverContent>
          </Popover>
        </div>
        {/* Filter Column 3 */}
        <div className="w-full flex justify-end gap-16">
          {/* START DATE */}
          <Popover>
            <PopoverHandler>
              <button
                type="button"
                className="p-0 bg-[#0088FF] flex justify-between max-w-[130px] w-full h-[45px] font-sofiasans text-base px-7 items-center"
              >
                <p className="font-semibold">-</p>
                {arrow}
              </button>
            </PopoverHandler>
            <PopoverContent placeholder=""> </PopoverContent>
          </Popover>
          {/* END DATE */}
          <Popover>
            <PopoverHandler>
              <button
                type="button"
                className="p-0 bg-[#0088FF] flex justify-between max-w-[130px] w-full h-[45px] font-sofiasans text-base px-7 items-center"
              >
                <p className="font-semibold">-</p>
                {arrow}
              </button>
            </PopoverHandler>
            <PopoverContent placeholder=""> </PopoverContent>
          </Popover>
        </div>
      </div>
      <button
        type="submit"
        className="uppercase text-white bg-[#0F1A42] h-16 font-sofiasans text-[32px] font-semibold"
      >
        {prefLang === "Tm" ? "Gözlemek" : "Поиск"}
      </button>
    </form>
  );
};

export default Filter;
