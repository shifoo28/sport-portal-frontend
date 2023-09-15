import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { activateTab } from "../../../redux/actions/main";
import SportNewsList from "./SportNewsList";

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
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const linkTo = (l: string, tab: number) => {
    dispatch(activateTab(tab));
    navigate(BASE_CATEGORIES + l);
  };

  useEffect(() => {
    dispatch(
      activateTab(
        links.indexOf(location.pathname.slice(BASE_CATEGORIES.length)) + 1
      )
    );
  }, [location.pathname]);
  const { active_tab, base_categories, prefLang } = useSelector(
    (state: any) => state.main
  );

  return (
    <div className="hidden w-full md:flex justify-end text-sm">
      {base_categories.map((nav: any, index: number) => {
        return prefLang === "Tm" ? (
          <p
            key={nav.id}
            className={`pr-5 cursor-pointer ${
              active_tab === index + 1 ? "text-[#0088FF]" : "text-[#0F1A42]"
            }`}
            onClick={() => linkTo(links[index], index + 1)}
          >
            {nav.nameTm}
          </p>
        ) : (
          <p
            key={nav.id}
            className={`pr-5 cursor-pointer ${
              active_tab === index + 1 ? "text-[#0088FF]" : "text-[#0F1A42]"
            }`}
            onClick={() => linkTo(links[index], index + 1)}
          >
            {nav.nameRu}
          </p>
        );
      })}
      <SportNewsList activeTab={active_tab} />
    </div>
  );
};

export default NavList;
