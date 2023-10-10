import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Filter from "./Filter";
import PopularItems from "./PopularItems";
import NewItems from "./NewItems";

const Shop = () => {
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  return (
    <div className="mx-32 max-w-[1170px] flex flex-col items-center pt-8 gap-24">
      <p className="font-oswald text-[50px] text-[#0F1A42] max-w-[800px] text-center capitalize">
        {prefLang === "Tm"
          ? "Ýurdumyzdaky ähli sport dükanlarynyň online satylýan ýeri"
          : "Все спортивные магазины страны онлайн."}
      </p>
      <Filter />
      <PopularItems />
      <NewItems />
    </div>
  );
};

export default Shop;
