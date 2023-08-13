import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ATHLETE,
  BASE_CATEGORIES,
  COMPETITIONS,
  GYMSANDCLUBS,
  HEALTHCARE,
  HEALTHYFOOD,
  SPORTS,
  SPORTSHOPS,
  TRAINERS,
} from "../../tools/links";
import SportNews from "./SportNews";

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

  return (
    <div className="hidden w-full md:flex justify-end text-sm">
      <p
        className={`pr-5 cursor-pointer ${
          activeTab === 1 ? "text-[#0088FF]" : "text-[#0F1A42]"
        }`}
        onClick={() => linkTo(SPORTS, 1)}
      >
        Sport görnüşleri
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          activeTab === 2 ? "text-[#0088FF]" : "text-[#0F1A42]"
        }`}
        onClick={() => linkTo(TRAINERS, 2)}
      >
        Tälimçiler
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          activeTab === 3 ? "text-[#0088FF]" : "text-[#0F1A42]"
        }`}
        onClick={() => linkTo(ATHLETE, 3)}
      >
        Türgenler
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          activeTab === 4 ? "text-[#0088FF]" : "text-[#0F1A42]"
        }`}
        onClick={() => linkTo(GYMSANDCLUBS, 4)}
      >
        Sport zallar we toparlar
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          activeTab === 5 ? "text-[#0088FF]" : "text-[#0F1A42]"
        }`}
        onClick={() => linkTo(HEALTHCARE, 5)}
      >
        Saglygy goramak
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          activeTab === 6 ? "text-[#0088FF]" : "text-[#0F1A42]"
        }`}
        onClick={() => linkTo(HEALTHYFOOD, 6)}
      >
        Dogry iýmit
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          activeTab === 7 ? "text-[#0088FF]" : "text-[#0F1A42]"
        }`}
        onClick={() => linkTo(SPORTSHOPS, 7)}
      >
        Sport dükanlar
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          activeTab === 8 ? "text-[#0088FF]" : "text-[#0F1A42]"
        }`}
        onClick={() => linkTo(COMPETITIONS, 8)}
      >
        Sport bäsleşikler
      </p>
      <SportNews activeTab={activeTab} linkTo={linkTo} />
    </div>
  );
};

export default NavList;
