import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import tmflag from "./svg/tmflag.svg";
import React from "react";

const SelectLang = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-center">
      <Menu open={open} handler={() => setOpen(!open)}>
        <MenuHandler>
          <Button className="flex items-center capitalize tracking-normal px-0">
            <img src={tmflag} />TM
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
        <MenuList className="overflow-visible p-1 gap-1">
          <MenuItem>TM</MenuItem>
          <MenuItem>RU</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SelectLang;
