import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import tmflag from "./svg/tmflag.svg";
import React, { useState } from "react";

const SelectLang = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("TM");

  return (
    <div className="flex items-center justify-center">
      <Menu open={open} handler={() => setOpen(!open)}>
        <MenuHandler>
          <Button className="flex items-center capitalize tracking-normal px-0 outline-none shadow-none">
            <img src={tmflag} />
            <p className="text-xs font-sofiasans text-black px-[2px]">{lang}</p>
            <svg
              width="8"
              height="3"
              viewBox="0 0 8 3"
              fill="none"
              className={`${
                open ? "rotate-180" : ""
              } h-5 w-3 transition-transform`}
            >
              <path
                d="M1 0.400635L4 1.95617L7 0.400635"
                stroke="#393939"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </MenuHandler>
        <MenuList className="overflow-visible p-1 gap-1 text-xs font-sofiasans outline-none rounded-none">
          <MenuItem
            className="hover:text-[#08F] rounded-none flex items-center justify-center"
            onClick={() => setLang("TM")}
          >
            TM
          </MenuItem>
          <MenuItem
            className="hover:text-[#08F] rounded-none flex items-center justify-center"
            onClick={() => setLang("RU")}
          >
            RU
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SelectLang;
