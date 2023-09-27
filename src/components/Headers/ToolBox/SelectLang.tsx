import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import tmflag from "./svg/tmflag.svg";
import ruflag from "./svg/ruflag.svg";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLangAction } from "../../../redux/actions/main";

const SelectLang = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const langs = useSelector((state: any) => state.main.lang);

  useEffect(() => {
    langs[0] = { ...langs[0], flag: tmflag };
    langs[1] = { ...langs[1], flag: ruflag };
    setPrefLang(0);
  }, [langs]);

  const [lang, setLang] = useState(langs[0]);
  const setPrefLang = (i: number) => {
    setLang(langs[i]);
    dispatch(setLangAction(langs[i].name));
  };

  return (
    <div className="flex items-center justify-center">
      <Menu open={open} handler={() => setOpen(!open)}>
        <MenuHandler>
          <Button className="flex items-center justify-center capitalize tracking-normal p-0 outline-none shadow-none rounded-none">
            <img src={lang.flag} />
            <p className="text-xs font-sofiasans text-black px-[2px]">
              {lang.name}
            </p>
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
            onClick={() => setPrefLang(0)}
          >
            TM
          </MenuItem>
          <MenuItem
            className="hover:text-[#08F] rounded-none flex items-center justify-center"
            onClick={() => setPrefLang(1)}
          >
            RU
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SelectLang;
