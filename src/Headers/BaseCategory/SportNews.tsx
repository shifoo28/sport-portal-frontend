import {
  Button,
  List,
  ListItem,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import React from "react";

const SportNews = () => {
  return (
      <Popover placement="bottom-end">
        <PopoverHandler>
          <Button className="flex items-center gap-2 px-0">
            <p className="text-[#08F] normal-case">Sport täzelikler</p>
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
            >
              <path
                d="M4.37605 0.5H8.45194C8.63309 0.5 8.72797 0.720937 8.60049 0.8519C8.60017 0.852226 8.59985 0.852552 8.59953 0.852877L6.50205 2.95034L5.21321 4.23918C4.86545 4.58694 4.29882 4.58694 3.95106 4.23918L3.59751 4.59274L3.95106 4.23918L0.562108 0.850248C0.562107 0.850247 0.562105 0.850246 0.562104 0.850245C0.431277 0.71941 0.524474 0.5 0.705771 0.5H4.37605Z"
                fill="#0088FF"
                stroke="#0088FF"
              />
            </svg>
          </Button>
        </PopoverHandler>
        <PopoverContent className="bg-white border text-xs font-oswald px-4 gap-1">
          <List>
            <ListItem className="hover:bg-slate-100">- Futbol</ListItem>
            <ListItem className="hover:bg-slate-100">- MMA</ListItem>
            <ListItem className="hover:bg-slate-100">- Agyr atletika</ListItem>
            <ListItem className="hover:bg-slate-100">- Woleýbol</ListItem>
            <ListItem className="hover:bg-slate-100">- Tennis</ListItem>
            <ListItem className="hover:bg-slate-100">- Suwda ýüzmek</ListItem>
            <ListItem className="hover:bg-slate-100">- Ýeňil atletika</ListItem>
            <ListItem className="hover:bg-slate-100">- Stol tennis</ListItem>
            <ListItem className="hover:bg-slate-100">- Badminton</ListItem>
            <ListItem className="hover:bg-slate-100">- Küşt</ListItem>
            <ListItem className="hover:bg-slate-100">- Göreş</ListItem>
            <ListItem className="hover:bg-slate-100">- Bodybuilding</ListItem>
          </List>
        </PopoverContent>
      </Popover>
  );
};

export default SportNews;
