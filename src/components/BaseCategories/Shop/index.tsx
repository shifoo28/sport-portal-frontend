import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import PopularItems from "./PopularItems";
import NewItems from "./NewItems";
import Filter from "./Filter";

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

// https://www.youtube.com/watch?v=6nmWGfwxOgY&t=363s