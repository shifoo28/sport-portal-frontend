import { Navbar, MobileNav } from "@material-tailwind/react";
import React, { useEffect } from "react";
import NavList from "./NavList";
import turkmenistansporttv from "./svg/turkmenistansporttv.svg";
import logoyoutube from "./svg/logoyoutube.svg";
import yousport from "./svg/yousport.svg";
import logoLive from "./svg/logolive.svg";
import live from "./svg/live.svg";

const BaseCategories = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="max-w-screen-xl lg:rounded-full h-[36px] mx-32">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <span className="flex pr-4">
          <img src="/icons/basecategory/logo_tst.png" className="w-5 h-5 pr-1" />
          <img src={turkmenistansporttv} alt="" />
        </span>
        <span className="flex pr-4">
          <img src={logoyoutube} className="w-5 h-5 pr-1" />
          <img src={yousport} alt="" />
        </span>
        <span className="flex pr-4">
          <img src={logoLive} className="w-5 h-5 pr-1" />
          <img src={live} alt="" />
        </span>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
};

export default BaseCategories;
