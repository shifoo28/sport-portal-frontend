import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_COMPETITIONS } from "../../../redux/types";
import { RootState } from "../../../redux/store";
import Filter from "./Filter";
import List from "./List";

const titleTm =
  "Türkmenistanda geçirilýän ähli sport bäsleşikleri we sport çäreleri";
const titleRu =
  "Все спортивные соревнования и спортивные мероприятия, проводимые в Туркменистане";

const Component = () => {
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  return (
    <div className="mx-32 max-w-[1170px] flex flex-col items-center p-8 gap-9">
      <p className="text-[#0F1A42] font-oswald text-[50px] text-center max-w-[900px] capitalize">{prefLang === "Tm" ? titleTm : titleRu}</p>
      <Filter />
      <List />
    </div>
  );
};

const Competitions = () => {
  const dispatch = useDispatch();
  dispatch({ type: GET_COMPETITIONS });

  return <Component />;
};

export default Competitions;
