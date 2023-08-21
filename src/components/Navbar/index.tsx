import React, { useEffect, useState } from "react";
import wertical from "../Headers/BaseCategory/svg/wertical.svg";
import logoyoutube from "../Headers/BaseCategory/svg/logoyoutube.svg";
import logolive from "../Headers/BaseCategory/svg/logolive.svg";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BASE_CATEGORIES,
  SPORTS,
  TRAINERS,
  ATHLETE,
  GYMSANDCLUBS,
  HEALTHCARE,
  HEALTHYFOOD,
  SPORTSHOPS,
  COMPETITIONS,
} from "../../tools/links";
import SportNews from "../Headers/BaseCategory/SportNews";
import { useSelector } from "react-redux";

const links = [
  SPORTS,
  TRAINERS,
  ATHLETE,
  GYMSANDCLUBS,
  HEALTHCARE,
  HEALTHYFOOD,
  SPORTSHOPS,
  COMPETITIONS,
];

const Navbar = () => {
  const { prefLang, base_categories, sport_categories } = useSelector(
    (state: any) => state.main
  );
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const linkTo = (l: string, tab: number) => {
    navigate(BASE_CATEGORIES + l);
    setActiveTab(tab);
  };

  useEffect(() => {
    setActiveTab(
      links.indexOf(location.pathname.slice(BASE_CATEGORIES.length)) + 1
    );
  }, [location.pathname]);
  const [display, setDisplay] = useState("hidden");

  useEffect(() => {
    // function to run on scroll
    const updateScrollDirection = () => {
      window.scrollY < 290 ? setDisplay("hidden") : setDisplay("");
    };

    window.addEventListener("scroll", updateScrollDirection); // add event listener

    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [window.scrollY]); // run when scrolls

  return (
    <div
      className={`w-full mx-32 ${display} max-w-[1440px] font-oswald text-sm`}
    >
      <div className="w-full h-9 top-0 max-w-[1170px] flex justify-between items-center fixed z-10 bg-white border-b">
        <span
          className="flex justify-center items-center cursor-pointer gap-1"
          onClick={() => linkTo("../", 0)}
        >
          <img src="/icons/basecategory/applogo.png" className="w-6 h-5" />
          <p className="text-xs text-[#0F1A42]">
            SPORT<span className="text-[#08F]">PORTAL</span>
          </p>
        </span>
        <span className="flex justify-center items-center cursor-pointer gap-1">
          <img src="/icons/basecategory/logo_tst.png" className="w-6 h-5" />
          <p className="text-xs text-[#00843D]">
            TÜRKMENISTAN{" "}
            <p className="flex justify-end items-end text-[#BFB55C] text-[8px] h-[8px]">
              SPORT TV
            </p>
          </p>
        </span>
        <span className="flex justify-center items-center cursor-pointer gap-1">
          <img src={logoyoutube} className="w-6 h-6" />
          <p className="text-xs">YOUSPORT</p>
        </span>
        <span className="flex justify-center items-center cursor-pointer gap-1">
          <img src={logolive} className="w-7 h-7" />
          <p className="text-xs text-[#F44336]">LIVE</p>
        </span>
        <img src={wertical} className="h-[60%]" />
        {base_categories.map((i: any, index: number) => {
          return prefLang === "Tm" ? (
            <p
              key={i.id}
              className={`cursor-pointer flex items-center ${
                activeTab === index + 1 ? "text-[#0088FF]" : "text-[#0F1A42]"
              }`}
              onClick={() => linkTo(links[index], index + 1)}
            >
              {i.nameTm}
            </p>
          ) : (
            <p
              key={i.id}
              className={`cursor-pointer flex items-center ${
                activeTab === index + 1 ? "text-[#0088FF]" : "text-[#0F1A42]"
              }`}
              onClick={() => linkTo(links[index], index + 1)}
            >
              {i.nameRu}
            </p>
          );
        })}
        <SportNews activeTab={activeTab} linkTo={linkTo} />
      </div>
    </div>
  );
};

export default Navbar;
