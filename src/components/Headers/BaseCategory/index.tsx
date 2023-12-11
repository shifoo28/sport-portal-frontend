import React from "react";
import NavList from "./NavList";
import logoyoutube from "./svg/logoyoutube.svg";
import logoLive from "./svg/logolive.svg";
import wertical from "./svg/wertical.svg";

const BaseCategoriesList = () => {
  return (
    <section className="w-full h-9">
      <nav className="font-oswald text-sm h-full mx-32 flex justify-between max-w-[1170px]">
        <div className="flex items-center justify-between h-full w-full gap-2">
          <div className="flex items-center justify-between font-oswald text-xs max-w-[280px] w-full">
            <div className="flex cursor-pointer items-center">
              <img
                src="/icons/basecategory/logo_tst.png"
                className="w-6 h-5 pr-1"
              />
              <p className="flex flex-col leading-[8px] relative">
                <p className="text-[#00843D]">TÜRKMENISTAN</p>
                <p className="text-[#BFB55C] text-[8px] text-right absolute right-0 bottom-[-8px]">SPORT TV</p>
              </p>
            </div>
            <div className="flex items-center cursor-pointer pr-1">
              <img src={logoyoutube} className="w-6 h-6 pr-1" />
              <p className="text-[#0F1A42]">YOUSPORT</p>
            </div>
            <div className="flex cursor-pointer pr-1 items-center">
              <img src={logoLive} className="w-7 h-7 pr-1" />
              <p className="text-[#F44336]">LIVE</p>
            </div>
          </div>
          <img src={wertical} />
          <NavList />
        </div>
      </nav>
    </section>
  );
};

export default BaseCategoriesList;
