import React, { useEffect, useState } from "react";
import wertical from "../Headers/BaseCategory/svg/wertical.svg";
import { useNavigate } from "react-router-dom";
import {
  BASE_CATEGORIES,
  SPORTS,
  TRAINERS,
  ATHLETE,
  GYMSANDCLUBS,
  HEALTHCARE,
  HEALTHYFOOD,
  COMPETITIONS,
} from "../../tools/links";
import SportNews from "../Headers/BaseCategory/SportCategories";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IBaseCategory } from "../../redux/interfaces/main";

const links = [
  SPORTS,
  TRAINERS,
  ATHLETE,
  GYMSANDCLUBS,
  HEALTHCARE,
  HEALTHYFOOD,
  COMPETITIONS,
];

const Navbar = () => {
  // useSelector
  const {
    prefLang,
    base_categories,
    active_tab,
  }: {
    prefLang: string;
    base_categories: IBaseCategory[];
    active_tab: number;
  } = useSelector((state: RootState) => state.main);

  // Hooks
  const navigate = useNavigate();
  useEffect(() => {
    // function to run on scroll
    const updateScrollDirection = () => {
      window.scrollY < 280 ? setDisplay("hidden") : setDisplay("");
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener

    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [window.scrollY]); // run when scrolls

  // useState
  const [display, setDisplay] = useState("hidden");

  // Function
  const linkTo = (link: string) => {
    navigate(BASE_CATEGORIES + link);
  };

  return (
    <div
      className={`w-full mx-32 ${display} max-w-[1440px] font-oswald text-sm`}
    >
      <div className="w-full h-9 top-0 max-w-[1170px] flex justify-between items-center fixed z-10 bg-white border-b">
        <span
          className="flex justify-center items-center cursor-pointer gap-1"
          onClick={() => linkTo("../")}
        >
          <img src="/icons/toolbox/nav_logo.png" className="w-8 h-5" />
          <p className="text-xs text-[#0F1A42]">
            SPORT<span className="text-[#08F]">PORTAL</span>
          </p>
        </span>
        <a
          className="flex justify-center items-center cursor-pointer gap-1"
          href="https://turkmentv.gov.tm/live"
          target="_blank"
        >
          <img src="/icons/basecategory/logo_tst.png" className="w-6 h-5" />
          <p className="flex flex-col leading-[8px] relative">
            <p className="text-[#00843D]">TÜRKMENISTAN</p>
            <p className="text-[#BFB55C] text-[8px] text-right absolute right-0 bottom-[-9px]">
              SPORT TV
            </p>
          </p>
        </a>
        <a
          className="flex justify-center items-center cursor-pointer gap-1"
          href="https://www.youtube.com/@turkmensport_tm"
          target="_blank"
        >
          <img src="/icons/basecategory/logo_youtube.png" className="w-6 h-4" />
          <p className="text-xs">YOUSPORT</p>
        </a>
        <a
          className="flex justify-center items-center cursor-pointer gap-1"
          href="https://www.instagram.com/sportportal.tm"
          target="_blank"
        >
          <img src="/icons/basecategory/logolive.gif" className="w-6 h-5" />
          <p className="text-xs text-[#F44336]">LIVE</p>
        </a>
        <img src={wertical} className="h-[60%]" />
        {base_categories.map((bc, index) => {
          return (
            <p
              key={index}
              className={`cursor-pointer flex items-center ${
                active_tab === index + 1 ? "text-[#0088FF]" : "text-[#0F1A42]"
              }`}
              onClick={() => linkTo(links[index])}
            >
              {prefLang === "Tm" ? bc.nameTm : bc.nameRu}
            </p>
          );
        })}
        <SportNews activeTab={active_tab} />
      </div>
    </div>
  );
};

export default Navbar;
