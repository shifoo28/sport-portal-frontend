import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SportNews from "./SportNews";
import {
  SPORTS,
  TRAINERS,
  ATHLETE,
  GYMSANDCLUBS,
  HEALTHCARE,
  HEALTHYFOOD,
  SPORTSHOPS,
  COMPETITIONS,
  BASE_CATEGORIES,
} from "../../../tools/links";
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

const NavList = () => {
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
  const navlist: [] = useSelector((state: any) => state.main.base_categories);
  const prefLang = useSelector((state: any) => state.main.prefLang);

  return (
    <div className="hidden w-full md:flex justify-end text-sm">
      {navlist.map((nav: any, index) => {
        return prefLang === "Tm" ? (
          <p
            key={nav.id}
            className={`pr-5 cursor-pointer ${
              activeTab === index + 1 ? "text-[#0088FF]" : "text-[#0F1A42]"
            }`}
            onClick={() => linkTo(links[index], index + 1)}
          >
            {nav.nameTm}
          </p>
        ) : (
          <p
            key={nav.id}
            className={`pr-5 cursor-pointer ${
              activeTab === index + 1 ? "text-[#0088FF]" : "text-[#0F1A42]"
            }`}
            onClick={() => linkTo(links[index], index + 1)}
          >
            {nav.nameRu}
          </p>
        );
      })}
      <SportNews activeTab={activeTab} linkTo={linkTo} />
    </div>
  );
};

export default NavList;
