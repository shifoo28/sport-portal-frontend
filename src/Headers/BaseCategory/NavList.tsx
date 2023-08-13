import React from "react";
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

const NavList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const linkTo = (l: string) => {
    navigate(BASE_CATEGORIES + l);
  };

  return (
    <div className="hidden w-full md:flex justify-end text-sm">
      <p
        className={`pr-5 cursor-pointer ${
          location.pathname === BASE_CATEGORIES + SPORTS ? "text-[#0088FF]" : ""
        }`}
        onClick={() => linkTo(SPORTS)}
      >
        Sport görnüşleri
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          location.pathname === BASE_CATEGORIES + TRAINERS
            ? "text-[#0088FF]"
            : ""
        }`}
        onClick={() => linkTo(TRAINERS)}
      >
        Tälimçiler
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          location.pathname === BASE_CATEGORIES + ATHLETE
            ? "text-[#0088FF]"
            : ""
        }`}
        onClick={() => linkTo(ATHLETE)}
      >
        Türgenler
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          location.pathname === BASE_CATEGORIES + GYMSANDCLUBS
            ? "text-[#0088FF]"
            : ""
        }`}
        onClick={() => linkTo(GYMSANDCLUBS)}
      >
        Sport zallar we toparlar
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          location.pathname === BASE_CATEGORIES + HEALTHCARE
            ? "text-[#0088FF]"
            : ""
        }`}
        onClick={() => linkTo(HEALTHCARE)}
      >
        Saglygy goramak
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          location.pathname === BASE_CATEGORIES + HEALTHYFOOD
            ? "text-[#0088FF]"
            : ""
        }`}
        onClick={() => linkTo(HEALTHYFOOD)}
      >
        Dogry iýmit
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          location.pathname === BASE_CATEGORIES + SPORTSHOPS
            ? "text-[#0088FF]"
            : ""
        }`}
        onClick={() => linkTo(SPORTSHOPS)}
      >
        Sport dükanlar
      </p>
      <p
        className={`pr-5 cursor-pointer ${
          location.pathname === BASE_CATEGORIES + COMPETITIONS
            ? "text-[#0088FF]"
            : ""
        }`}
        onClick={() => linkTo(COMPETITIONS)}
      >
        Sport bäsleşikler
      </p>
    </div>
  );
};

export default NavList;
