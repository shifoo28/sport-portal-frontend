import React from "react";
import NavList from "./NavList";
import SportNews from "./SportNews";
import turkmenistansporttv from "./svg/turkmenistansporttv.svg";
import logoyoutube from "./svg/logoyoutube.svg";
import yousport from "./svg/yousport.svg";
import logoLive from "./svg/logolive.svg";
import live from "./svg/live.svg";

const BaseCategories = () => {
  return (
    <section className="w-full h-9">
      <nav className="font-oswald text-sm h-full mx-32 flex justify-between max-w-[1170px]">
        <div className="flex items-center justify-between h-full w-full">
          <div className="flex gap-3 items-center">
            <span className="flex cursor-pointer pr-1">
              <img
                src="/icons/basecategory/logo_tst.png"
                className="w-6 h-5 pr-1"
              />
              <img src={turkmenistansporttv} />
            </span>
            <span className="flex cursor-pointer pr-1">
              <img src={logoyoutube} className="w-6 h-6 pr-1" />
              <img src={yousport} />
            </span>
            <span className="flex cursor-pointer pr-1">
              <img src={logoLive} className="w-7 h-7 pr-1" />
              <img src={live} />
            </span>
          </div>
          <div className="w-max flex flex-col">
            <NavList />
          </div>
          <div>
            <SportNews />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default BaseCategories;
